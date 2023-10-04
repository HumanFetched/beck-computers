import axios from 'axios';
import { TConnectionType } from '../../../types';
import { IRecords } from 'src/modules/domains/interfaces/domains.interface';
interface IMandrillCredentials {
  api?: {
    key: string;
  };
}

export class MandrillHelper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  readonly MANDRILL_BASE_URL = 'https://mandrillapp.com/api/1.0';

  async verifyCredentials(
    type: TConnectionType,
    credentials: IMandrillCredentials,
  ) {
    if (type === 'API') {
      try {
        const { api } = credentials || {};
        const response = await axios.get(
          `${this.MANDRILL_BASE_URL}/users/ping`,
          {
            headers: {
              authorization: `Basic ${api.key}`,
            },
            data: {
              key: api.key,
            },
          },
        );
        if (response && response.data === 'PONG!') return true;
        else return false;
      } catch (error) {
        return false;
      }
    }
    return false;
  }

  async verifyDNSRecords(apiKey: string, domain: string) {
    let DNSRecords: IRecords = { SPF: false, DKIM: false };

    await axios
      .post(`${this.MANDRILL_BASE_URL}/senders/check-domain`, {
        key: apiKey,
        domain,
      })
      .then((res) => {
        const { spf, dkim } = res?.data;
        DNSRecords = {
          SPF: spf.valid || false,
          DKIM: dkim.valid || false,
        };
      })
      .catch(() => {
        DNSRecords = {
          SPF: false,
          DKIM: false,
        };
      });

    return DNSRecords;
  }
}
