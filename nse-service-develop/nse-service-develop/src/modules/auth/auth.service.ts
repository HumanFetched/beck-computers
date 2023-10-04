import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoRefreshToken,
  CognitoAccessToken,
} from 'amazon-cognito-identity-js';
import { Model } from 'mongoose';
import { parseJwt } from '../../common/helper';
import { UsersService } from '../users/users.service';
import { AuthConfig } from './auth.config';
import { Captcha } from './entities/captcha.entity';
import svgCaptcha from 'svg-captcha';
@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;
  constructor(
    @InjectModel(Captcha.name) private captchaModel: Model<Captcha>,
    @Inject(AuthConfig)
    private readonly authConfig: AuthConfig,
    private userService: UsersService,
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.authConfig.userPoolId,
      ClientId: this.authConfig.clientId,
    });
  }

  getCaptcha() {
    const generatedCaptcha = svgCaptcha.create({ size: 5 });
    const captchaText: string = generatedCaptcha.text;
    const captcha = new this.captchaModel({ code: captchaText });
    captcha.save();
    return { id: captcha._id, captcha: generatedCaptcha.data };
  }

  async verifyCaptcha(verifyCaptchaData: {
    captcha_id: string;
    captcha_ans: string;
  }) {
    // find captcha from db and delete
    const captcha = await this.captchaModel
      .findOneAndDelete({ _id: verifyCaptchaData.captcha_id })
      .lean();
    // validate captcha
    if (!captcha) return false;
    if (captcha.code === verifyCaptchaData.captcha_ans) {
      return true;
    }
    return false;
  }

  async registerUser(registerRequest: { email: string; password: string }) {
    const { email, password } = registerRequest;
    await new Promise((resolve, reject) => {
      return this.userPool.signUp(
        email,
        password,
        [],
        null,
        (error, result) => {
          if (!result) {
            reject(error);
          } else {
            this.userService
              .create({
                email,
              })
              .then(() => {
                resolve(result.user);
              });
          }
        },
      );
    });
    return {
      status: 'success',
      message: 'A verification code has been sent to your email.',
    };
  }

  authenticateUser(user: { email: string; password: string }) {
    const { email, password } = user;

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const newUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: async (result) => {
          const token = result['idToken'].jwtToken;
          const refreshToken = result.getRefreshToken().getToken();
          const userData = parseJwt(token);
          const user = await this.userService.findOneByEmail(userData.email);
          resolve({ ...user, token, refreshToken });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  async resendAccountConfirmationCode(email: string) {
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const user = new CognitoUser(userData);
    await new Promise((resolve, reject) => {
      return user.resendConfirmationCode(function (err, result) {
        if (err) {
          console.log(err);
          reject(err.message);
        }
        resolve(result);
      });
    });
    return {
      status: 'success',
      message: 'Verification code has been resent.',
    };
  }

  async confirmUserAccount(email: string, code: string) {
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const user = new CognitoUser(userData);
    await new Promise((resolve, reject) => {
      return user.confirmRegistration(
        code,
        true,
        (err: { message: any }, result: string) => {
          if (err) {
            reject(err.message);
          }
          resolve(result);
        },
      );
    });
    return {
      status: 'success',
      message: 'Account confirmed',
    };
  }

  requestPasswordResetCode(email: string) {
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const user = new CognitoUser(userData);
    return new Promise((resolve, reject) => {
      return user.forgotPassword({
        onSuccess: function (data: Record<string, any>) {
          resolve(data);
        },
        onFailure: function (err: Record<string, any>) {
          reject(err.message);
        },
      });
    });
  }

  async resetPassword(email: string, code: string, password: string) {
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const user = new CognitoUser(userData);
    await new Promise((resolve, reject) => {
      return user.confirmPassword(code, password, {
        onSuccess: function (data: string) {
          resolve(data);
        },
        onFailure: function (err: Error) {
          reject(err.message);
        },
      });
    });
    return {
      status: 'success',
      message: 'Password reset successful',
    };
  }

  async refresh(RefreshToken: string, header) {
    const { email } = new CognitoAccessToken({
      AccessToken: header.authorization,
    }).decodePayload();

    if (!email) {
      throw new NotFoundException('Invalid token');
    }
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const user = new CognitoUser(userData);

    const token = new CognitoRefreshToken({ RefreshToken });
    return await new Promise((resolve, reject) => {
      user.refreshSession(token, async (err, session) => {
        if (err) return reject(err.message);
        resolve(this.getTokens(session));
      });
    });
  }

  private getTokens = (session) => {
    return {
      accessToken: session.getAccessToken().getJwtToken(),
      idToken: session.getIdToken().getJwtToken(),
      refreshToken: session.getRefreshToken().getToken(),
    };
  };

  async findUserByEmail(email: string) {
    return await this.userService.findOneByEmail(email);
  }
}
