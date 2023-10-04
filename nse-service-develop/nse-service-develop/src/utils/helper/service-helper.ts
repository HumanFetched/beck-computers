import mongoParser from 'mongodb-query-parser';
import { AttachmentDto } from '../../modules/delivery/dto/send-email.dto';
import { ListDto } from '../../common-dto/list.dto';
import { TConnectionType, TProvidersName } from '../../types';
import {
  MailslurpHelper,
  MandrillHelper,
  SendgridHelper,
  SocketLabHelper,
} from './providers';
import imageToBase64 from 'image-to-base64';
import mime from 'mime-types';
import { MailgunHelper } from './providers/mailgun.helper';
import { SendinblueHelper } from './providers/sendinblue.helper';
import moment from 'moment';
import { Types } from 'mongoose';

export const decodeListFields = (fields: string, isAggregate = false) => {
  if (isAggregate) {
    const obj = {};
    const data = fields.split(',');
    if (data && data.length >= 0) {
      data.map((item) => {
        if (item.trim()) {
          obj[item.trim()] = 1;
        }
      });
    }
    return obj;
  }
  if (fields) {
    const data = fields.split(',').join(' ');
    return data;
  }
  return '';
};

export const multipleQuery = (query) => {
  let multiQuery;
  for (const key in query) {
    multiQuery = {
      ...multiQuery,
      [key]:
        typeof query[key] === 'string' && !Types.ObjectId.isValid(query[key])
          ? new RegExp(query[key]?.replace(/[.*+?^${}()[\]\\]/g, '\\$&')) //handle special operator in search
          : query[key],
    };
  }
  return multiQuery;
};

export const getListQuery = (
  {
    page = 1,
    limit = 10,
    filter = '{}',
    fields = '',
    q = '',
    sort = '{}',
    toDuration = '',
    fromDuration = '',
  }: ListDto,
  isAggregate = false,
) => {
  const query = JSON.parse(decodeURIComponent(filter as string));
  const sortParser = mongoParser(sort);
  const listFields = decodeListFields(fields, isAggregate);
  const toDurationParsed = decodeURIComponent(toDuration);
  const fromDurationParsed = decodeURIComponent(fromDuration);

  const queries = multipleQuery(query);

  return {
    page,
    limit,
    query: queries,
    q,
    fields: listFields,
    sort: sortParser,
    fromDuration: fromDurationParsed,
    toDuration: toDurationParsed,
  };
};

export const verifyProvider = async (
  provider: TProvidersName,
  connectionType: TConnectionType,
  apiDetails?: Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _smtpDetails?: Record<string, unknown>,
): Promise<boolean> => {
  if (connectionType === 'API') {
    switch (provider) {
      case 'Sendgrid':
        const sendGrid = new SendgridHelper();
        return await sendGrid.verifyCredentials(connectionType, {
          api: {
            key: apiDetails.apiKey as string,
          },
        });
      case 'Mailslurp':
        const mailSlurp = new MailslurpHelper();
        return await mailSlurp.verifyCredentials(connectionType, {
          api: {
            key: apiDetails.apiKey as string,
          },
        });
      case 'SocketLabs':
        const socketLab = new SocketLabHelper();
        return await socketLab.verifyCredentials(connectionType, {
          api: {
            key: apiDetails.apiKey as string,
          },
          serverId: apiDetails.serverId as string,
        });
      case 'Mandrill':
        const mandrill = new MandrillHelper();
        return await mandrill.verifyCredentials(connectionType, {
          api: {
            key: apiDetails.apiKey as string,
          },
        });
      case 'Mailgun':
        const mailgun = new MailgunHelper();
        return await mailgun.verifyCredentials(connectionType, {
          api: {
            key: apiDetails.apiKey as string,
            domain: apiDetails.domainName as string,
          },
        });
      case 'Sendinblue':
        const sendInBlue = new SendinblueHelper();
        return await sendInBlue.verifyCredentials(connectionType, {
          api: {
            key: apiDetails.apiKey as string,
          },
        });
      default:
        return false;
    }
  }
  return false;
};

export const getDomainFromMailId = (email: string) => {
  if (!email) return;
  const emailDomain = email.split('@');
  return emailDomain[1];
};

export const isValidEmailId = (email: string, domain: string) => {
  if (!email || !domain) return false;
  const emailDomain = email.split('@').pop();
  if (emailDomain === domain) return true;
  return false;
};

export const checkValidDomain = (
  domains: { _id: string; domain: string }[],
  address: string,
) => {
  return domains.some((domain) => isValidEmailId(address, domain.domain));
};

const getBase64Image = async (url: string) => {
  const base64Image = await imageToBase64(url);
  return base64Image;
};

export const getAttachments = async (attachments: AttachmentDto[]) => {
  if (!attachments || attachments.length < 1) return [];
  const promises = attachments.map(async (attachment) => {
    return {
      ...attachment,
      url: await getBase64Image(attachment.url),
      contentType: attachment.contentType || mime.lookup(attachment.filename),
    };
  });
  return Promise.all(promises);
};

export const extractEmail = (text: string) => {
  return text?.match(/([a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)[0];
};

export const extractDomain = (text: string) => {
  const result = text
    ?.match(/([a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
    ?.toString()
    .split('@')
    .pop();
  if (result && result.length > 0) {
    return result.toString();
  }
  return '';
};

export const getIntermediateDates = (
  startDate: Date,
  stopDate: Date,
  dayGap: number,
) => {
  let momentCurrentDate = moment(startDate);
  const dateArray = [];
  const momentStopDate = moment(stopDate);
  while (momentCurrentDate <= momentStopDate) {
    dateArray.push(moment(momentCurrentDate).format('YYYY-MM-DD'));
    momentCurrentDate = moment(momentCurrentDate).add(dayGap, 'days');
  }
  return dateArray;
};
