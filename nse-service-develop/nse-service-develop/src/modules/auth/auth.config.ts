import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public userPoolId: string = 'us-east-1_QuBEW7h6X';
  public clientId: string = '6tr6p0o1hk84tom1hv7kcqjnu5';
  public region: string = process.env.AWS_REGION;
  public authority = `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`;
}


