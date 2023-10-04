import { FindOneDto } from './../../common-dto/find-one.dto';
import { ListDto } from './../../common-dto/list.dto';
import { Domain } from './entities/domain.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, PaginateModel, PaginateOptions } from 'mongoose';
import { CreateDomainDto } from './dto/create-domain.dto';
import { User } from '../users/entities/user.entity';
import { DOMAIN } from '../../utils/constants';
import { customAlphabet } from 'nanoid';
import { decodeListFields, getListQuery } from '../../utils/helper';
import dns from 'node:dns';
import { ProviderGroup } from '../provider-groups/entities/provider-group.entity';
import { verifyDNSRecords } from './verify.records';
import { ProviderDetail } from '../provider-details/entities/provider-detail.entity';
import { ConfigService } from '@nestjs/config';
import { UpdateDomainDto } from './dto/update-domain.dto';

const nanoid = customAlphabet(
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-',
  30,
);

interface IPopulateProviders
  extends Pick<ProviderDetail, 'connectionType' | 'apiDetails'> {
  provider: { _id: string };
}

@Injectable()
export class DomainsService {
  resolver: dns.promises.Resolver;

  constructor(
    @InjectModel(Domain.name)
    private readonly domainModel: PaginateModel<Domain>,
    @InjectModel(ProviderGroup.name)
    private readonly providerGroup: Model<ProviderGroup>,
    private configService: ConfigService,
  ) {
    const { Resolver } = dns.promises;
    this.resolver = new Resolver();
  }

  async create(createDomainDto: CreateDomainDto, user: User) {
    const domainCounts = await this.domainModel
      .find({
        domain: createDomainDto.domain,
        user: user._id,
      })
      .count();

    if (domainCounts >= 1) {
      throw new BadRequestException('Domain name already exist');
    }
    const domainData = new this.domainModel({
      ...createDomainDto,
      user: user._id,
      key: createDomainDto.domain,
      value: `${DOMAIN.valuePrefix}-${nanoid()}`,
    });
    const domain = await domainData.save();
    return { result: domain };
  }

  async update(_id: string, updateDomainDto: UpdateDomainDto, user: User) {
    const domain = await this.domainModel.findOneAndUpdate(
      { _id, user: user._id },
      { ...updateDomainDto },
      { new: true },
    );
    if (!domain) {
      throw new NotFoundException('Domain not found');
    }
    return { result: domain };
  }

  async findAll(listDomainDto: ListDto, user: User) {
    const { page, limit, query, fields, sort } = getListQuery(listDomainDto);
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      populate: ['group'],
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.domainModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const domain = await this.domainModel
      .findOne({ _id })
      .lean()
      .select(listFields);

    if (!domain) {
      throw new NotFoundException(`Domain not found`);
    }
    return { result: domain };
  }

  async findOneByQuery(options: FilterQuery<Domain>) {
    const domain = await this.domainModel.findOne(options);
    if (!domain) {
      throw new NotFoundException('Domain not found');
    }
    return { result: domain };
  }

  async findAllByQuery(options: FilterQuery<Domain>) {
    const domain = await this.domainModel.find(options);
    if (!domain) {
      throw new NotFoundException('Domain not found');
    }
    return { result: domain };
  }

  async findDomainWithGroup(options: FilterQuery<Domain>) {
    const domain = await this.domainModel
      .findOne(options)
      .lean()
      .populate<{
        group: ProviderGroup;
      }>([
        {
          path: 'group',
          select: 'domain',
        },
      ]);
    if (!domain) {
      throw new NotFoundException('Domain not found');
    }
    return { result: domain };
  }

  async remove(_id: string, user: User) {
    await this.domainModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }

  async search(listDomainDto: ListDto, user: User) {
    const { page, limit, fields, q, sort } = getListQuery(listDomainDto);
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

    const domain = await this.domainModel.paginate(
      {
        $text: { $search: q },
        user: user._id,
      },
      options,
    );
    return domain;
  }

  async verifyDomain(_id: string, user: User) {
    const { result } = await this.findOneByQuery({ _id, user: user._id });

    // check dns record
    try {
      const dnsRecords = (await this.resolver.resolve(
        result.domain,
        result.type,
      )) as string[][];

      // search if record exist in 2 dimentional
      const searchData = dnsRecords.findIndex((arr) =>
        arr.includes(result.value),
      );

      const isVerified = searchData !== -1;
      const data = await this.domainModel.findByIdAndUpdate(
        { _id },
        { isVerified },
        { new: true },
      );
      return { result: data };
    } catch (error) {
      await this.domainModel.findByIdAndUpdate(
        { _id },
        { isVerified: false },
        { new: true },
      );
      throw new NotFoundException(
        `Some error occurred while fetching DNS records for ${result.domain}, Please try after some time !`,
      );
    }
  }

  async isDmarcRecordPresent(domain: string) {
    let result = false;
    try {
      const DMarcRecord = await dns.promises.resolve(`_dmarc.${domain}`, 'TXT');
      DMarcRecord.length > 0 ? (result = true) : (result = false);
    } catch (error) {
      result = false;
    }
    return result;
  }

  async verifyDomainRecords(_id: string, user: User) {
    const domain = await this.domainModel.findOne({ _id, user: user._id });

    if (!domain) {
      throw new NotFoundException('Invalid domain id');
    }

    const providerGroup = await this.providerGroup
      .findOne({ domain: _id, user: user._id })
      .lean()
      .populate<{
        providers: IPopulateProviders[];
      }>([
        {
          path: 'providers',
          select: 'provider apiDetails connectionType',
          populate: { path: 'provider', select: 'name' },
        },
      ]);

    if (!providerGroup) {
      throw new NotFoundException("Either group is deleted or doesn't exist.");
    }

    const DMarc = await this.isDmarcRecordPresent(domain.domain);

    const verifiedRecords = await Promise.all(
      providerGroup.providers.map(async (value) => {
        const { provider, connectionType, apiDetails } = value;
        return await verifyDNSRecords(
          provider?._id.toString() as string,
          this.configService,
          domain.domain,
          connectionType,
          apiDetails,
          DMarc,
        );
      }),
    );
    await this.domainModel.findOneAndUpdate(
      { _id },
      {
        authentication: verifiedRecords,
      },
    );
    return { results: verifiedRecords };
  }
}
