import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateOptions } from 'mongoose';
import { decodeListFields, getListQuery } from '../../utils/helper';
import { FindOneDto, ListDto } from '../../common-dto';
import { User } from '../users/entities/user.entity';
import { CreateEmailProviderDto } from './dto/create-email-provider.dto';
import { EmailProvider } from './entities/email-provider.entity';

@Injectable()
export class EmailProvidersService {
  constructor(
    @InjectModel(EmailProvider.name)
    private readonly emailProviderModel: PaginateModel<EmailProvider>,
  ) {}
  async create(createEmailProviderDto: CreateEmailProviderDto, user: User) {
    if (createEmailProviderDto.records.length < 1)
      throw new BadRequestException('Need atleast one record');

    const emailProviderData = new this.emailProviderModel({
      ...createEmailProviderDto,
      user: user._id,
    });
    const emailProvider = await emailProviderData.save();

    return { result: emailProvider };
  }

  async findAll(listEmailProviderDto: ListDto) {
    const { page, limit, query, fields, sort } =
      getListQuery(listEmailProviderDto);
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      // populate: ['user'],
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.emailProviderModel.paginate(
      {
        ...query,
      },
      options,
    );
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const emailProvider = await this.emailProviderModel
      .findOne({ _id })
      .lean()
      .select(listFields);

    if (!emailProvider) {
      throw new NotFoundException(`emailProvider not found`);
    }
    return { result: emailProvider };
  }
}
