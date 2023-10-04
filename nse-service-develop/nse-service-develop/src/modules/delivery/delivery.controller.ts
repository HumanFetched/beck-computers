import { Body, Controller, Headers, Post } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post('/send-email')
  sendEmail(
    @Body() sendEmailDto: SendEmailDto,
    @Headers() headers: { 'x-api-key': string },
  ) {
    return this.deliveryService.sendEmail(headers['x-api-key'], sendEmailDto);
  }
}
