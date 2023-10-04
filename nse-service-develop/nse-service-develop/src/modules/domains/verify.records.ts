import { IDNSRecords } from './interfaces/domains.interface';
import {
  MailslurpHelper,
  MandrillHelper,
  SendgridHelper,
  SocketLabHelper,
} from 'src/utils/helper/providers';
import { ConfigService } from '@nestjs/config';
import { SendinblueHelper } from 'src/utils/helper/providers/sendinblue.helper';
import { MailgunHelper } from 'src/utils/helper/providers/mailgun.helper';

const getProvidernameById = (id: string, configService: ConfigService) => {
  if (id === configService.get('providers.MAILSLURP_ID')) {
    return 'mailslurp';
  }
  if (id === configService.get('providers.MANDRILL_ID')) {
    return 'mandrill';
  }
  if (id === configService.get('providers.SENDGRID_ID')) {
    return 'sendgrid';
  }
  if (id === configService.get('providers.SOCKETLABS_ID')) {
    return 'socketlabs';
  }
  if (id === configService.get('providers.OFFICE365_ID')) {
    return 'office365';
  }
  if (id === configService.get('providers.MAILGUN_ID')) {
    return 'mailgun';
  }
  if (id === configService.get('providers.SENDINBLUE_ID')) {
    return 'sendinblue';
  }
};

export const verifyDNSRecords = async (
  providerId: string,
  configService: ConfigService,
  domain: string,
  connectionType: string,
  apiDetails: Record<string, string>,
  DMarc: boolean,
) => {
  let DNSRecords: IDNSRecords = {
    provider: getProvidernameById(providerId, configService),
    records: { DMarc },
  };

  if (providerId === configService.get('providers.MAILSLURP_ID')) {
    const mailslurpRecords = await new MailslurpHelper().verifyDNSRecords(
      domain,
    );
    DNSRecords = {
      ...DNSRecords,
      records: {
        ...DNSRecords.records,
        ...mailslurpRecords,
      },
    };
  }

  if (providerId === configService.get('providers.MANDRILL_ID')) {
    const mandrillRecords = await new MandrillHelper().verifyDNSRecords(
      apiDetails.apiKey,
      domain,
    );
    DNSRecords = {
      ...DNSRecords,
      records: {
        ...DNSRecords.records,
        ...mandrillRecords,
      },
    };
  }

  if (
    providerId === configService.get('providers.SENDGRID_ID') &&
    connectionType === 'API'
  ) {
    const sendGridRecords = await new SendgridHelper().verifyDNSRecords(
      apiDetails.apiKey,
      domain,
    );
    DNSRecords = {
      ...DNSRecords,
      records: {
        ...DNSRecords.records,
        ...sendGridRecords,
      },
    };
  }

  if (providerId === configService.get('providers.SOCKETLABS_ID')) {
    const socketLabsRecords = await new SocketLabHelper().verifyDNSRecords(
      domain,
    );
    DNSRecords = {
      ...DNSRecords,
      records: {
        ...DNSRecords.records,
        ...socketLabsRecords,
      },
    };
  }

  if (providerId === configService.get('providers.SENDINBLUE_ID')) {
    const sendInBlueRecords = await new SendinblueHelper().verifyDNSRecords(
      domain,
    );
    DNSRecords = {
      ...DNSRecords,
      records: {
        ...DNSRecords.records,
        ...sendInBlueRecords,
      },
    };
  }

  if (providerId === configService.get('providers.MAILGUN_ID')) {
    const sendInBlueRecords = await new MailgunHelper().verifyDNSRecords(
      apiDetails.apiKey,
      domain,
    );
    DNSRecords = {
      ...DNSRecords,
      records: {
        ...DNSRecords.records,
        ...sendInBlueRecords,
      },
    };
  }
  return DNSRecords;
};
