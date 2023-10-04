import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
// import { nseApi } from '../../services';
import { cloudStoragesSettingsActions, useAppDispatch } from '../../state';
import { ITokenResponse } from '../../types';
import { CLOUD_STORAGES, outh2RedirectUri } from '../constants';

export class GoogleDriveHandler {
  queryCode: string;
  constructor(queryCode: string) {
    this.queryCode = queryCode;
  }
  dispatch = useAppDispatch();
  getRefreshToken = async () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append('code', this.queryCode || '');
    urlencoded.append(
      'client_id',
      process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    );
    urlencoded.append(
      'client_secret',
      process.env.REACT_APP_GOOGLE_CLIENT_SECRET || '',
    );
    urlencoded.append(
      'redirect_uri',
      `${outh2RedirectUri}?type=${CLOUD_STORAGES.GOOGLE_DRIVE}`,
    );
    urlencoded.append('grant_type', 'authorization_code');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestOptions: any = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('https://accounts.google.com/o/oauth2/token', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res: ITokenResponse = JSON.parse(result);
        const { email } = jwtDecode<{ email: string }>(res?.id_token || '');
        this.dispatch(
          cloudStoragesSettingsActions.setCloudStorageName({
            email: email || '',
            refreshToken: res.refresh_token || '',
            cloudStorageName: CLOUD_STORAGES.GOOGLE_DRIVE,
          }),
        );
      })
      .catch((err) => toast.error(err?.message || `Something went wrong`));
  };
}

export class DropboxHandler {
  queryCode: string;
  constructor(queryCode: string) {
    this.queryCode = queryCode;
  }
  dispatch = useAppDispatch();
  getRefreshToken = async () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append('code', this.queryCode || '');
    urlencoded.append(
      'client_id',
      process.env.REACT_APP_DROPBOX_CLIENT_ID || '',
    );
    urlencoded.append(
      'client_secret',
      process.env.REACT_APP_DROPBOX_CLIENT_SECRET || '',
    );
    urlencoded.append(
      'redirect_uri',
      `${outh2RedirectUri}?type=${CLOUD_STORAGES.DROPBOX}`,
    );
    urlencoded.append('grant_type', 'authorization_code');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestOptions: any = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('https://api.dropboxapi.com/oauth2/token', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res: ITokenResponse = JSON.parse(result);
        const { email } = jwtDecode<{ email: string }>(res?.id_token || '');
        this.dispatch(
          cloudStoragesSettingsActions.setCloudStorageName({
            email: email || '',
            refreshToken: res.refresh_token || '',
            cloudStorageName: CLOUD_STORAGES.DROPBOX,
          }),
        );
      })
      .catch((err) => toast.error(err?.message || `Something went wrong`));
  };
}
