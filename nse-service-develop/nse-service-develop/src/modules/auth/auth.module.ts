import { Module } from '@nestjs/common';
import { AuthConfig } from './auth.config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Captcha, CaptchaSchema } from './entities/captcha.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
    MongooseModule.forFeature([
      {
        name: Captcha.name,
        schema: CaptchaSchema,
      },
    ]),
  ],
  providers: [AuthService, AuthConfig],
  controllers: [AuthController],
  exports: [AuthService, AuthConfig],
})
export class AuthModule {}
