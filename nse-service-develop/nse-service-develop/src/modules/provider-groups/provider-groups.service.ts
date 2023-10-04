import { User } from '../users/entities/user.entity';
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProviderGroupDto } from './dto/create-provider-group.dto';
import {
  AddDomainDto,
  AddProvidersDto,
  RemoveDomainDto,
  RemoveProviderDto,
  UpdateProviderGroupDto,
} from './dto/update-provider-group.dto';
import { ProviderGroup } from './entities/provider-group.entity';
import { FilterQuery, PaginateModel, PaginateOptions } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { decodeListFields, getListQuery } from '../../utils/helper';
import { ListDto, FindOneDto } from '../../common-dto';
import { ProviderDetailsService } from '../provider-details/provider-details.service';
import { ProviderDetail } from '../provider-details/entities/provider-detail.entity';
import { EmailProvider } from '../email-providers/entities/email-provider.entity';
import { CanAddProviderDto } from './dto/can-add-provider.dto';
import { Domain } from '../domains/entities/domain.entity';
import { DomainsService } from '../domains/domains.service';

@Injectable()
export class ProviderGroupsService {
  constructor(
    @InjectModel(ProviderGroup.name)
    private readonly providerGroupModel: PaginateModel<ProviderGroup>,

    @InjectModel(ProviderDetail.name)
    private readonly providerDetailModel: PaginateModel<ProviderDetail>,

    private providerDetailsService: ProviderDetailsService,

    private domainService: DomainsService,
  ) {}
  async create(createProviderGroupDto: CreateProviderGroupDto, user: User) {
    const providerGroupModelData = new this.providerGroupModel({
      ...createProviderGroupDto,
      user: user._id,
    });
    const providerGroup = await providerGroupModelData.save();
    return { result: providerGroup };
  }

  async findAll(listProviderGroupDto: ListDto, user: User) {
    const { page, limit, query, fields, sort } =
      getListQuery(listProviderGroupDto);
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      populate: [
        {
          path: 'providers',
        },
        {
          path: 'domain',
          select: 'domain',
        },
      ],
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.providerGroupModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async search(listProviderGroupDto: ListDto, user: User) {
    const { page, limit, fields, q, sort } = getListQuery(listProviderGroupDto);
    const options: PaginateOptions = {
      page,
      limit,
      customLabels: {
        docs: 'results',
      },
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };

    const domain = await this.providerGroupModel.paginate(
      {
        $text: { $search: q },
        user: user._id,
      },
      options,
    );
    return domain;
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);

    const providerGroup = await this.providerGroupModel
      .findOne({ _id })
      .lean()
      .select(listFields)
      .populate([
        {
          path: 'providers',
          select:
            'connectionType provider isVerified apiDetails smtpDetails configuration isActive',
          populate: { path: 'provider', select: 'name displyName' },
        },
        {
          path: 'domain',
        },
      ]);
    if (!providerGroup) {
      throw new NotFoundException(`Group not found`);
    }
    return { result: providerGroup };
  }

  async findOneByQuery(options: FilterQuery<ProviderGroup>) {
    const providerGroup = await this.providerGroupModel.findOne(options);
    if (!providerGroup) {
      throw new NotFoundException('Group not found');
    }
    return { result: providerGroup };
  }

  async update(
    _id: string,
    updateProviderGroupDto: UpdateProviderGroupDto,
    user: User,
  ) {
    await this.findOneByQuery({ _id, user: user._id });
    try {
      const providerGroup = await this.providerGroupModel
        .findOneAndUpdate(
          { _id, user: user._id },
          { ...updateProviderGroupDto },
          { new: true },
        )
        .populate([
          {
            path: 'providers',
            select:
              'connectionType provider isVerified apiDetails smtpDetails isActive configuration',
            populate: { path: 'provider', select: 'name displyName' },
          },
          {
            path: 'domain',
          },
        ]);
      return { result: providerGroup };
    } catch (error) {
      throw new NotFoundException(
        'Provider group either not found or cannot update',
      );
    }
  }

  async remove(_id: string, user: User) {
    await this.providerGroupModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }

  async addProvider(_id: string, addProvidersDto: AddProvidersDto, user: User) {
    // check group id exist
    await this.findOneByQuery({ _id, user: user._id });

    // await this.canAddProviderByProviderDetailsId(
    //   {
    //     provider: addProvidersDto.provider,
    //     providerGroupId: _id,
    //   },
    //   user,
    // );

    const providerGroup = await this.providerGroupModel
      .findOneAndUpdate(
        { _id, user: user._id },
        { $addToSet: { providers: addProvidersDto.provider } },
        { new: true },
      )
      .populate({
        path: 'providers',
        select:
          'connectionType provider isVerified apiDetails smtpDetails isActive configuration',
        populate: { path: 'provider', select: 'name displyName' },
      });

    const index = providerGroup.providers.findIndex((prov) => {
      return (
        (prov as unknown as ProviderDetail)._id.toString() ===
        addProvidersDto.provider
      );
    });

    return {
      result: {
        group: providerGroup,
        provider: providerGroup.providers[index],
      },
    };
  }

  async removeProvider(
    _id: string,
    removeProviderDto: RemoveProviderDto,
    user: User,
  ) {
    // check group id exist
    await this.findOneByQuery({ _id, user: user._id });

    // check id exist in provider
    await this.providerDetailsService.findOneByQuery({
      _id: removeProviderDto.provider,
      user: user._id,
    });

    const providerGroup = await this.providerGroupModel
      .findOneAndUpdate(
        { _id, user: user._id },
        { $pull: { providers: removeProviderDto.provider } },
        { new: true },
      )
      .populate({
        path: 'providers',
        select:
          'connectionType provider isVerified apiDetails smtpDetails isActive',
        populate: { path: 'provider', select: 'name displyName' },
      });
    return {
      result: {
        group: providerGroup,
        provider: removeProviderDto.provider,
      },
    };
  }

  // Add domain in group
  async addDomain(_id: string, addDomainDto: AddDomainDto, user: User) {
    // check group id exist
    await this.findOneByQuery({ _id, user: user._id });

    const groupDomain = await this.providerGroupModel
      .findOneAndUpdate(
        { _id, user: user._id },
        { $addToSet: { domain: addDomainDto.domain } },
        { new: true },
      )
      .populate({
        path: 'domain',
        select: 'domain',
      });

    const index = groupDomain.domain.findIndex((prov) => {
      return (prov as unknown as Domain)._id.toString() === addDomainDto.domain;
    });

    return {
      result: {
        group: groupDomain,
        domain: groupDomain.domain[index],
      },
    };
  }

  // Remove domain from group
  async removeDomain(
    _id: string,
    removeDomainDto: RemoveDomainDto,
    user: User,
  ) {
    // check group id exist
    await this.findOneByQuery({ _id, user: user._id });

    // check id exist in provider
    await this.domainService.findOneByQuery({
      _id: removeDomainDto.domain,
      user: user._id,
    });

    const groupDomain = await this.providerGroupModel
      .findOneAndUpdate(
        { _id, user: user._id },
        { $pull: { domain: removeDomainDto.domain } },
        { new: true },
      )
      .populate({
        path: 'domain',
        select: 'domain',
      });
    return {
      result: {
        group: groupDomain,
        domain: removeDomainDto.domain,
      },
    };
  }

  async canAddProviderByProviderDetailsId(
    canProviderAddDto: CanAddProviderDto,
    user: User,
  ) {
    const { provider, providerGroupId } = canProviderAddDto;
    // check repeated provider groups
    const providersGroups = await this.providerGroupModel
      .findOne({
        _id: providerGroupId,
        user: user._id,
      })
      .lean()
      .populate({
        path: 'providers',
        populate: { path: 'provider', select: 'name displyName' },
      });

    const allIncludedProviders = (
      providersGroups.providers as unknown as ProviderDetail[]
    ).map((item) => {
      return (item.provider as unknown as EmailProvider)._id.toString();
    });

    // check id exist in provider
    const providerDetails = await this.providerDetailsService.findOneByQuery({
      _id: provider,
      user: user._id,
    });

    if (
      allIncludedProviders.includes(
        (providerDetails.provider as unknown as EmailProvider)._id.toString(),
      )
    ) {
      throw new BadGatewayException('Provider already exist');
    }
    return { status: 'SUCCESS' };
  }

  async canAddProvider(canProviderAddDto: CanAddProviderDto, user: User) {
    const { provider, providerGroupId } = canProviderAddDto;
    // check repeated provider groups
    const providersGroups = await this.providerGroupModel
      .findOne({
        _id: providerGroupId,
        user: user._id,
      })
      .lean()
      .populate({
        path: 'providers',
        populate: { path: 'provider', select: 'name displyName' },
      });

    if (!providersGroups) {
      throw new NotFoundException('Group not found');
    }

    const allIncludedProviders = (
      providersGroups.providers as unknown as ProviderDetail[]
    ).map((item) => {
      return (item.provider as unknown as EmailProvider)._id.toString();
    });

    if (allIncludedProviders.includes(provider)) {
      throw new BadGatewayException('Provider already exist');
    }
    return { status: 'SUCCESS' };
  }
}
