import axios from 'axios';
import { IRecords } from 'src/modules/domains/interfaces/domains.interface';
import { TConnectionType } from '../../../types';

interface IMailgunCredentials {
  api?: {
    key: string;
    domain: string;
  };
}

export class MailgunHelper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  readonly MAILGUN_BASE_URL = 'https://api.mailgun.net/v3';

  async verifyCredentials(
    type: TConnectionType,
    credentials: IMailgunCredentials,
  ): Promise<boolean> {
    if (type === 'API') {
      try {
        const { api } = credentials || {};
        const response = await axios.get(
          `${this.MAILGUN_BASE_URL}/${api.domain}/templates`,
          {
            headers: {
              accept: 'application/json',
            },
            auth: {
              username: 'api',
              password: `${api.key}`,
            },
          },
        );
        if (response?.data?.items) return true;
        else return false;
      } catch (error) {
        return false;
      }
    }
    return false;
  }

  async verifyDNSRecords(apiKey: string, domain: string) {
    let DNSRecords: IRecords = {
      MX: false,
      CNAME: false,
      SPF: false,
      DKIM: false,
    };
    try {
      await axios
        .get(`${this.MAILGUN_BASE_URL}/domains/${domain}`, {
          headers: {
            accept: 'application/json',
          },
          auth: {
            username: 'api',
            password: `${apiKey}`,
          },
        })
        .then((res) => {
          res.data.sending_dns_records.forEach(
            (dnsRecord: Record<string, string>) => {
              DNSRecords = {
                ...DNSRecords,
                CNAME:
                  dnsRecord.record_type === 'CNAME' &&
                  dnsRecord.valid === 'valid'
                    ? true
                    : DNSRecords.CNAME,
                SPF:
                  dnsRecord.record_type === 'TXT' &&
                  dnsRecord.value.includes('include:mailgun.org') &&
                  dnsRecord.valid === 'valid'
                    ? true
                    : DNSRecords.SPF,
                DKIM:
                  dnsRecord.record_type === 'TXT' &&
                  dnsRecord.value.includes('k=rsa') &&
                  dnsRecord.name === domain &&
                  dnsRecord.valid === 'valid'
                    ? true
                    : DNSRecords.DKIM,
              };
            },
          );
        });
    } catch (error) {
      DNSRecords = {
        ...DNSRecords,
        MX: false,
        SPF: false,
        DKIM: false,
      };
    }
    return DNSRecords;
  }
}
