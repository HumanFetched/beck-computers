import axios from 'axios';
import { IRecords } from 'src/modules/domains/interfaces/domains.interface';
import { TConnectionType } from '../../../types';
import dns from 'node:dns';
interface ISendinblueCredentials {
  api?: {
    key: string;
  };
}

export class SendinblueHelper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  readonly SENDINBLUE_BASE_URL = 'https://api.sendinblue.com/v3/smtp';

  async verifyCredentials(
    type: TConnectionType,
    credentials: ISendinblueCredentials,
  ): Promise<boolean> {
    if (type === 'API') {
      // try {
      //   const { api } = credentials || {};
      //   const response = await axios.get(
      //     `${this.SENDINBLUE_BASE_URL}/templates`,
      //     {
      //       headers: {
      //         'api-key': `${api.key}`,
      //         accept: 'application/json',
      //       },
      //     },
      //   );
      //   if (response?.data?.templates) return true;
      //   else return false;
      // } catch (error) {
      //   return false;
      // }
      return true;
    }
    return false;
  }

  async verifyDNSRecords(domain: string) {
    let DNSRecords: IRecords = {
      CNAME: false,
      SPF: false,
      DKIM: false,
    };

    try {
      // For spf and cname
      const domainRecords = await dns.promises.resolve(domain, 'TXT');
      domainRecords.forEach(([record]) => {
        if (record === 'sendinblue-code:7f66471cbed8b7ee2a431a3f714c9ca2') {
          DNSRecords = { ...DNSRecords, CNAME: true };
        }
        if (record.includes('include:spf.sendinblue.com')) {
          DNSRecords = { ...DNSRecords, SPF: true };
        }
      });

      // For DKIM
      const DkimRecords = await dns.promises.resolve(
        `mail._domainkey.${domain}`,
        'TXT',
      );
      DkimRecords.forEach(([record]) => {
        if (
          record ===
          'k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDeMVIzrCa3T14JsNY0IRv5/2V1/v2itlviLQBwXsa7shBD6TrBkswsFUToPyMRWC9tbR/5ey0nRBH0ZVxp+lsmTxid2Y2z+FApQ6ra2VsXfbJP3HE6wAO0YTVEJt1TmeczhEd2Jiz/fcabIISgXEdSpTYJhb0ct0VJRxcg4c8c7wIDAQAB'
        ) {
          DNSRecords = { ...DNSRecords, DKIM: true };
        }
      });
    } catch (error) {
      DNSRecords = {
        CNAME: false,
        SPF: false,
        DKIM: false,
      };
    }

    return DNSRecords;
  }
}
