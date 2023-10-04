import { DynamicModule, Module } from '@nestjs/common';
import { SNSClient } from '@aws-sdk/client-sns';
import { SNS_CLIENT } from './constants';

@Module({})
export class SnsModule {
  static forRoot(region, credentials): DynamicModule {
    const sns = new SNSClient({ region, credentials });
    const snsProvider = {
      provide: SNS_CLIENT,
      useValue: sns,
    };
    return {
      module: SnsModule,
      providers: [snsProvider],
      exports: [snsProvider],
      global: true,
    };
  }
}
