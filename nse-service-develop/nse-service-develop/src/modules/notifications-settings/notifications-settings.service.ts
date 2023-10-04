import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, PaginateModel, PaginateOptions } from 'mongoose';
import { ListDto } from 'src/common-dto';
import { extractDomain, getListQuery } from 'src/utils/helper';
import { User } from '../users/entities/user.entity';
import { CreateNotificationsSettingsDto } from './dto/create-notifications-settings.dto';
import { UpdateNotificationsSettingsDto } from './dto/update-notifications-settings.dto';
import { NotificationsSettings } from './entities/notifications-settings.entity';

@Injectable()
export class NotificationsSettingsService {
  constructor(
    @InjectModel(NotificationsSettings.name)
    private readonly notificationsSettingsModel: PaginateModel<NotificationsSettings>,
  ) {}

  async create(
    createNotificationsSettingsDto: CreateNotificationsSettingsDto,
    user: User,
  ) {
    const checkDomainExists = await this.notificationsSettingsModel.findOne({
      domain: createNotificationsSettingsDto.domain,
      email: createNotificationsSettingsDto.email,
      user: user._id,
    });

    if (checkDomainExists) {
      throw new NotAcceptableException(
        `Notifications settings for ${
          createNotificationsSettingsDto.email
            ? createNotificationsSettingsDto.email
            : createNotificationsSettingsDto.domain
        } already present`,
      );
    }
    if (
      createNotificationsSettingsDto.email &&
      createNotificationsSettingsDto.domain !==
        extractDomain(createNotificationsSettingsDto.email)
    ) {
      throw new NotAcceptableException("email doesn't match the domain");
    }
    const notificationsSettingsData = new this.notificationsSettingsModel({
      ...createNotificationsSettingsDto,
      user: user._id,
    });
    const notificationsSettings = await notificationsSettingsData.save();
    return { result: notificationsSettings };
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
    return await this.notificationsSettingsModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  async update(
    _id: string,
    updateNotificationsSettingsDto: UpdateNotificationsSettingsDto,
    user: User,
  ) {
    const checkDomainExists = await this.notificationsSettingsModel.findOne({
      domain: updateNotificationsSettingsDto.domain,
      email: updateNotificationsSettingsDto.email,
      user: user._id,
    });

    if (checkDomainExists && checkDomainExists?._id?.toString() !== _id) {
      throw new NotAcceptableException(
        `Notifications settings for ${
          updateNotificationsSettingsDto.email
            ? updateNotificationsSettingsDto.email
            : updateNotificationsSettingsDto.domain
        } already present`,
      );
    }

    const notificationsSettings =
      await this.notificationsSettingsModel.findOneAndUpdate(
        { _id, user: user._id },
        { ...updateNotificationsSettingsDto },
        { new: true },
      );

    if (!notificationsSettings) {
      throw new NotFoundException(
        'Notifications settings either not found or cannot update',
      );
    }
    return { result: notificationsSettings };
  }

  async findOneByQuery(options: FilterQuery<NotificationsSettings>) {
    return await this.notificationsSettingsModel.findOne(options);
  }

  async findAllByQuery(options: FilterQuery<NotificationsSettings>) {
    const notificationsSettings = await this.notificationsSettingsModel.find(
      options,
    );
    return { result: notificationsSettings };
  }

  async remove(_id: string, user: User) {
    await this.notificationsSettingsModel.deleteOne({
      _id,
      user: user._id,
    });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }
}
