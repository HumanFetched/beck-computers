import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { SENDMAIL_PRODUCER_EVENT_TYPE } from 'src/utils/constants';
import { getAttachments, getDomainFromMailId } from '../../utils/helper';
import { ApiKeysService } from '../api-keys/api-keys.service';
import { DomainsService } from '../domains/domains.service';
import { Domain } from '../domains/entities/domain.entity';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class DeliveryService {
  constructor(
    private apiKeyService: ApiKeysService,
    private configService: ConfigService,
    private domainService: DomainsService,
  ) {}

  getDomainList(domains: Domain[]) {
    return domains.map((domain) => {
      return domain.domain;
    });
  }

  async sendEmail(xApiKey: string, sendEmailDto: SendEmailDto) {
    const { result: apiKey } = await this.apiKeyService.findOneByQuery({
      key: xApiKey,
    });

    if (!apiKey) {
      throw new NotFoundException('Invalid api key');
    }

    const emailDomain = getDomainFromMailId(sendEmailDto.from);
    if (!emailDomain) {
      throw new NotFoundException('Invalid Email');
    }

    const domain = await this.domainService.findDomainWithGroup({
      domain: emailDomain,
      user: apiKey.user,
    });

    const attachments = await getAttachments(sendEmailDto.attachments);

    const payload = {
      eventType: SENDMAIL_PRODUCER_EVENT_TYPE.sendEmail,
      data: {
        providerGroupId: domain.result.group._id.toString(),
        emailData: {
          ...sendEmailDto,
          attachments: attachments || [],
        },
      },
    };
    try {
      await axios.post(
        this.configService.get('sqs.SEND_EMAIL_PRODUCER_URL'),
        payload,
      );
      return { message: 'Email will be sent in sometime.' };
    } catch (error) {
      throw new BadRequestException('Bad request');
    }
  }
}
