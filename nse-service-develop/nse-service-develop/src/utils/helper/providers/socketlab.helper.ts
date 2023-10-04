import dns from 'node:dns';
import { IRecords } from 'src/modules/domains/interfaces/domains.interface';
import { TConnectionType } from '../../../types';
interface ISocketLabCredentials {
  api?: {
    key: string;
  };
  serverId: string;
}

export class SocketLabHelper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async verifyCredentials(
    type: TConnectionType,
    credentials: ISocketLabCredentials,
  ) {
    if (type === 'API') {
      // try {
      //   const { api, serverId } = credentials || {};

      //   const authKey = `${serverId}:${api.key}`;
      //   const buff = new Buffer(authKey);
      //   const base64data = buff.toString('base64');

      //   const ressponse = await axios.get(
      //     'https://api.socketlabs.com/marketing/v1/lists',
      //     {
      //       headers: {
      //         Authorization: `Basic ${base64data}`,
      //       },
      //       data: {},
      //     },
      //   );
      //   if (ressponse && ressponse.status === 200) return true;
      //   else return false;
      // } catch (error) {
      //   return false;
      // }
      return true;
    }
    return false;
  }

  async verifyDNSRecords(domain: string) {
    let DNSRecords: IRecords = { CNAME: false };

    try {
      const cNameRecords = await dns.promises.resolve(
        `dkim._domainkey.${domain}`,
        'CNAME',
      );

      cNameRecords.forEach((record) => {
        if (record === 'dkim._domainkey.email-od.com') {
          DNSRecords = { ...DNSRecords, CNAME: true };
        } else {
          DNSRecords = { ...DNSRecords, CNAME: false };
        }
      });
    } catch (error) {
      DNSRecords = { ...DNSRecords, CNAME: false };
    }
    return DNSRecords;
  }
}
