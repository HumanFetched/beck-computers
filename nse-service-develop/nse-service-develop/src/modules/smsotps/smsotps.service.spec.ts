import { Test, TestingModule } from '@nestjs/testing';
import { SendSmsService } from './smsotps.service';

describe('SendSmsService', () => {
  let service: SendSmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendSmsService],
    }).compile();

    service = module.get<SendSmsService>(SendSmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
