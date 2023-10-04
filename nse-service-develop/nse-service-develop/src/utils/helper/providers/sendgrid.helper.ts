import axios from 'axios';
import { IRecords } from 'src/modules/domains/interfaces/domains.interface';
import { TConnectionType } from '../../../types';

interface ISendgridCredentials {
  api?: {
    key: string;
  };
}

export class SendgridHelper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  readonly SENDGRID_BASE_URL = 'https://api.sendgrid.com/v3';

  async verifyCredentials(
    type: TConnectionType,
    credentials: ISendgridCredentials,
  ): Promise<boolean> {
    if (type === 'API') {
      try {
        const { api } = credentials || {};
        const response = await axios.get(
          `${this.SENDGRID_BASE_URL}/templates`,
          {
            headers: {
              Authorization: `Bearer ${api.key}`,
              'Content-Type': 'application/json',
            },
          },
        );
        if (response.data.templates) return true;
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

    await axios
      .get(`${this.SENDGRID_BASE_URL}/whitelabel/domains?domain=${domain}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((res) => {
        let validRecord;
        res.data?.map((details) => {
          const { mail_server, subdomain_spf, dkim, mail_cname, dkim1, dkim2 } =
            details?.dns;
          // Default config
          if (mail_server && subdomain_spf && dkim) {
            DNSRecords = {
              ...DNSRecords,
              MX: mail_server.valid,
              SPF: subdomain_spf.valid,
              DKIM: dkim.valid,
            };
            if (DNSRecords.MX && DNSRecords.SPF && DNSRecords.DKIM)
              validRecord = DNSRecords;
          }
          // Automated security, custom path and custom DKIM selector config
          if (mail_cname && dkim1 && dkim2) {
            DNSRecords = {
              ...DNSRecords,

              CNAME: mail_cname.valid,
              DKIM: dkim1.valid && dkim2.valid,
            };
            if (DNSRecords.CNAME && DNSRecords.DKIM) {
              validRecord = DNSRecords;
            }
          }
          validRecord && (DNSRecords = validRecord);
        });
      })
      .catch(() => {
        DNSRecords = {
          ...DNSRecords,
          MX: false,
          SPF: false,
          DKIM: false,
        };
      });

    return DNSRecords;
  }
}
