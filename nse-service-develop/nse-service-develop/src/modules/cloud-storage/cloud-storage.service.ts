import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, PaginateModel, PaginateOptions } from 'mongoose';
import { FindOneDto, ListDto } from 'src/common-dto';
import { decodeListFields, getListQuery } from 'src/utils/helper';
import { User } from '../users/entities/user.entity';
import { CreateCloudStorageDto } from './dto/create-cloud-storage.dto';
import { UpdateCloudStorageDto } from './dto/update-cloud-storage.dto';
import { CloudStorage } from './entities/cloud-storage.entity';

@Injectable()
export class CloudStorageService {
  constructor(
    @InjectModel(CloudStorage.name)
    private readonly cloudStorageModel: PaginateModel<CloudStorage>,
  ) {}

  async create(createCloudStorageDto: CreateCloudStorageDto, user: User) {
    const cloudSettingCounts = await this.cloudStorageModel
      .find({
        name: createCloudStorageDto.cloudStorageName,
        user: user._id,
      })
      .count();

    if (cloudSettingCounts >= 1) {
      throw new BadRequestException(
        'cloud storage settings for a drive already exist',
      );
    }
    if (createCloudStorageDto.isActive) {
      await this.cloudStorageModel.updateMany(
        { isActive: true, user: user._id },
        { isActive: false },
      );
    }
    const cloudSettingData = new this.cloudStorageModel({
      ...createCloudStorageDto,
      user: user._id,
    });
    const cloudStorage = await cloudSettingData.save();
    return { result: cloudStorage };
  }

  async findAll(listCloudStorageDto: ListDto, user: User) {
    const { page, limit, query, fields, sort } =
      getListQuery(listCloudStorageDto);
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.cloudStorageModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async findAllScheduledExports() {
    const cloudSettings = await this.cloudStorageModel.find({
      isActive: true,
    });
    if (cloudSettings?.length < 1) {
      throw new NotAcceptableException(
        'currently no users have enabled for reports auto export',
      );
    }
    return cloudSettings;
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const cloudStorage = await this.cloudStorageModel
      .findOne({ _id })
      .lean()
      .select(listFields);

    if (!cloudStorage) {
      throw new NotFoundException(`Cloud storage not found`);
    }
    return { result: cloudStorage };
  }

  async findOneByQuery(options: FilterQuery<CloudStorage>) {
    const couldStorageData = await this.cloudStorageModel.findOne(options);
    if (!couldStorageData) {
      throw new NotFoundException('Cloud storage not found');
    }
    return { result: couldStorageData };
  }

  async update(
    _id: string,
    updateCloudStorageDto: UpdateCloudStorageDto,
    user: User,
  ) {
    if (updateCloudStorageDto.isActive) {
      await this.cloudStorageModel.updateMany(
        { isActive: true, user: user._id },
        { isActive: false },
      );
    }

    const cloudStorageData = await this.cloudStorageModel.findOneAndUpdate(
      { _id, user: user._id },
      { ...updateCloudStorageDto },
      { new: true },
    );
    if (!cloudStorageData) {
      throw new NotFoundException('Cloud storage not found');
    }
    return { result: cloudStorageData };
  }

  async remove(_id: string, user: User) {
    await this.cloudStorageModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }
}
