import {
  BadGatewayException,
  // forwardRef,
  // Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, PaginateModel, PaginateOptions } from 'mongoose';
import {
  decodeListFields,
  getListQuery,
  verifyProvider,
} from '../../utils/helper';
import { ListDto } from '../../common-dto/list.dto';
import { User } from '../users/entities/user.entity';
import { CreateProviderDetailDto } from './dto/create-provider-detail.dto';
import { UpdateProviderDetailDto } from './dto/update-provider-detail.dto';
import { ProviderDetail } from './entities/provider-detail.entity';
import { FindOneDto } from '../../common-dto/find-one.dto';
// import { ProviderGroupsService } from '../provider-groups/provider-groups.service';
import { EmailProvidersService } from '../email-providers/email-providers.service';
import { EmailProvider } from '../email-providers/entities/email-provider.entity';
import { TProvidersName } from 'src/types';

@Injectable()
export class ProviderDetailsService {
  constructor(
    @InjectModel(ProviderDetail.name)
    private readonly providerDetailsModel: PaginateModel<ProviderDetail>,

    // injecting providerGroup Service
    // @Inject(forwardRef(() => ProviderGroupsService))
    // private providerGroupsService: ProviderGroupsService,

    // injecting providerGroupService
    private emailProviderService: EmailProvidersService,
  ) {}
  async create(createProviderDetailDto: CreateProviderDetailDto, user: User) {
    const emailProvider = await this.emailProviderService.findOne({
      _id: createProviderDetailDto.provider,
    });

    const validationResult = await verifyProvider(
      emailProvider.result.name as TProvidersName,
      createProviderDetailDto.connectionType,
      createProviderDetailDto.apiDetails,
      createProviderDetailDto.smtpDetails,
    );
    if (!validationResult) throw new BadGatewayException('Invalid API Key');
    // if (createProviderDetailDto.providerGroupId) {
    //   await this.providerGroupsService.canAddProvider(
    //     {
    //       provider: createProviderDetailDto.provider,
    //       providerGroupId: createProviderDetailDto.providerGroupId,
    //     },
    //     user,
    //   );
    // }
    const providerDetailsData = new this.providerDetailsModel({
      ...createProviderDetailDto,
      user: user._id,
    });
    const providerDetail = await providerDetailsData.save();
    return { result: providerDetail };
  }

  async findAll(listProviderDetailsDto: ListDto, user: User) {
    const { page, limit, query, fields, sort } = getListQuery(
      listProviderDetailsDto,
    );
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
    return await this.providerDetailsModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const providerDetails = await this.providerDetailsModel
      .findOne({ _id })
      .lean()
      .populate({ path: 'provider', select: 'name' })
      .select(listFields);

    if (!providerDetails) {
      throw new NotFoundException(`Provider details not found`);
    }
    return { result: providerDetails };
  }

  async update(
    _id: string,
    updateProviderDetailDto: UpdateProviderDetailDto,
    user: User,
  ) {
    const emailProvider = await this.providerDetailsModel
      .findOne({ _id })
      .populate({ path: 'provider', select: 'name' });

    if (!emailProvider) {
      throw new NotFoundException('Provider details not found');
    }

    const validationResult = await verifyProvider(
      (emailProvider.provider as unknown as EmailProvider)
        .name as TProvidersName,
      emailProvider.connectionType,
      updateProviderDetailDto.apiDetails,
      updateProviderDetailDto.smtpDetails,
    );
    if (!validationResult) throw new BadGatewayException('Invalid API Key');
    await this.findOneByQuery({ _id, user: user._id });
    if (
      updateProviderDetailDto.connectionType === 'SMTP' &&
      !updateProviderDetailDto.smtpDetails
    ) {
      throw new BadGatewayException('SMTP details required');
    }
    if (
      updateProviderDetailDto.connectionType === 'API' &&
      !updateProviderDetailDto.apiDetails
    ) {
      throw new BadGatewayException('API details required');
    }
    const providerDetailsData = await this.providerDetailsModel
      .findOneAndUpdate(
        { _id, user: user._id },
        { ...updateProviderDetailDto },
        { new: true },
      )
      .populate({ path: 'provider', select: 'name displayName' });
    return { result: providerDetailsData };
  }

  async remove(_id: string, user: User) {
    await this.providerDetailsModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }

  async findOneByQuery(options: FilterQuery<ProviderDetail>) {
    const providerDetail = await this.providerDetailsModel
      .findOne(options)
      .lean()
      .populate('provider');
    if (!providerDetail) {
      throw new NotFoundException('Provider details not found');
    }
    return providerDetail;
  }
}
