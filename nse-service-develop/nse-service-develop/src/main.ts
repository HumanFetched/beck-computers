import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const configService = app.get(ConfigService);

  // Initialize swagger
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customfavIcon: 'https://nse-media.s3.amazonaws.com/images/logo/logo_1.svg',
    customSiteTitle: 'NSE API Service',
  };

  const document = getSwaggerDocument(app, configService.get('port'));
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(configService.get('port'));
}

export const getSwaggerDocument = (app: INestApplication, port: number) => {
  const options = new DocumentBuilder()
    .setTitle('NSE Service')
    .setDescription('REST API  Documentation for NSE service')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer(`http://localhost:${port}`)
    .addServer(
      `http://nse-service-staging.eba-qznzx7gx.us-east-1.elasticbeanstalk.com`,
    )
    .setContact('NSE', 'https://www.nexweave.com', 'connect@nexweave.com')
    .build();
  return SwaggerModule.createDocument(app, options);
};

bootstrap();
