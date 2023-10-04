import axios from 'axios';
import dns from 'node:dns';
import { IRecords } from 'src/modules/domains/interfaces/domains.interface';
import { TConnectionType } from '../../../types';

interface IMailslurpCredentials {
  api?: {
    key: string;
  };
}

export class MailslurpHelper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async verifyCredentials(
    type: TConnectionType,
    credentials: IMailslurpCredentials,
  ) {
    if (type === 'API') {
      try {
        const { api } = credentials || {};
        const ressponse = await axios.get(
          'https://api.mailslurp.com/user/info',
          {
            headers: {
              'x-api-key': api.key,
            },
          },
        );
        if (ressponse.data.accountState === 'ACTIVE') return true;
        else return false;
      } catch (error) {
        return false;
      }
    }
    return false;
  }

  async verifyDNSRecords(domain: string) {
    let DNSRecords: IRecords = { SPF: false, DKIM: false };

    try {
      const records = await dns.promises.resolve(domain, 'TXT');
      records.forEach(([record]) => {
        // FOR SPF
        if (record.includes('v=spf1 include:amazonses.com -all')) {
          DNSRecords = { ...DNSRecords, SPF: true };
        } else {
          DNSRecords = { ...DNSRecords, SPF: false };
        }
      });
      // FOR DKIM
      // TODO: Add logic for dkim
    } catch (error) {
      DNSRecords = { ...DNSRecords, DKIM: false, SPF: false };
    }
    return DNSRecords;
  }
}
