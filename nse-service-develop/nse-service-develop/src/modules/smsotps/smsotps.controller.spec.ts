import { Test, TestingModule } from '@nestjs/testing';
import { SendSmsController } from './smsotps.controller';

describe('SendSmsController', () => {
  let controller: SendSmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendSmsController],
    }).compile();

    controller = module.get<SendSmsController>(SendSmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
