import {
  GoogleDriveHandler,
  DropboxHandler,
} from '../../lib/utils/helper/cloud-storages';
import { CLOUD_STORAGES } from '../utils/constants';

export const cloudStorageHandler = {
  [CLOUD_STORAGES.GOOGLE_DRIVE]: GoogleDriveHandler,
  [CLOUD_STORAGES.DROPBOX]: DropboxHandler,
};

function useMakeClassInstance(cloudStorageType: string, queryCode: string) {
  if (queryCode && cloudStorageType)
    return new cloudStorageHandler[cloudStorageType](queryCode);
}

export default useMakeClassInstance;
