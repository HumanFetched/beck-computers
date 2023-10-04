import { ProviderGroup } from 'src/modules/provider-groups/entities/provider-group.entity';

export interface IRecords {
  MX?: boolean;
  CNAME?: boolean;
  DKIM?: boolean;
  DMarc?: boolean;
  SPF?: boolean;
}
export interface IDNSRecords {
  provider: string;
  records: IRecords;
}

export interface IPopulateParent {
  child: ProviderGroup;
}
