import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, PaginateModel, PaginateOptions } from 'mongoose';
import { User } from '../users/entities/user.entity';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
import { ApiKey } from './entities/api-key.entity';
import uuidAPIKey from 'uuid-apikey';
import { FindOneDto, ListDto } from '../../common-dto';
import { decodeListFields, getListQuery } from '../../utils/helper';

@Injectable()
export class ApiKeysService {
  constructor(
    @InjectModel(ApiKey.name)
    private readonly apiKeyModel: PaginateModel<ApiKey>,
  ) {}
  async create(createApiKeyDto: CreateApiKeyDto, user: User) {
    // await this.providerGroupService.findOneByQuery({
    //   _id: createApiKeyDto.providerGroup,
    //   user: user._id,
    // });
    const key = uuidAPIKey.create().apiKey;
    const apiData = new this.apiKeyModel({
      ...createApiKeyDto,
      key,
      user: user._id,
    });
    const apiKey = await apiData.save();
    return { result: apiKey };
  }

  async findAll(listApiKeyDto: ListDto, user: User) {
    const { page, limit, query, fields, sort } = getListQuery(listApiKeyDto);
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
    return await this.apiKeyModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const apiKeys = await this.apiKeyModel
      .findOne({ _id })
      .lean()
      .select(listFields);

    if (!apiKeys) {
      throw new NotFoundException(`API Key not found`);
    }
    return { result: apiKeys };
  }

  async findOneByQuery(options: FilterQuery<ApiKey>) {
    const apiKey = await this.apiKeyModel.findOne(options);
    if (!apiKey) {
      throw new NotFoundException('API Key not found');
    }
    return { result: apiKey };
  }

  async update(_id: string, updateApiKeyDto: UpdateApiKeyDto, user: User) {
    await this.findOneByQuery({ _id, user: user._id });
    // if (updateApiKeyDto.providerGroup) {
    //   await this.providerGroupService.findOneByQuery({
    //     _id: updateApiKeyDto.providerGroup,
    //     user: user._id,
    //   });
    // }
    try {
      const apiKey = await this.apiKeyModel.findOneAndUpdate(
        { _id, user: user._id },
        { ...updateApiKeyDto },
        { new: true },
      );
      return { result: apiKey };
    } catch (error) {
      throw new NotFoundException('apiKey either not found or cannot update');
    }
  }

  async remove(_id: string, user: User) {
    await this.apiKeyModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }
}
