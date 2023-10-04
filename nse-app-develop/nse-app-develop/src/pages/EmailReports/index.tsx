import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../lib/components';
import { AddCloudStorageSettings } from '../../lib/containers/AddUpdateCloudStorageSettings';
import CloudStoragesSettingsTable from '../../lib/containers/CloudStoragesSettingsTable';
import useMakeClassInstance from '../../lib/hooks/useMakeClassInstance';
import {
  CLOUD_STORAGES,
  dropboxOuth2Url,
  googleDriveOuth2Url,
} from '../../lib/utils/constants';
import { useQuery } from '../../lib/utils/helper';
import { DropboxIcon } from './dropbox-icon';
import { GoogleDriveIcon } from './googel-drive-icon';

const EmailReports = () => {
  const queryCode = useQuery()?.get('code') || '';
  const cloudStorageType = useQuery()?.get('type') || '';
  const navigate = useNavigate();

  const handler = useMakeClassInstance(cloudStorageType, queryCode);

  useEffect(() => {
    if (queryCode && handler) {
      (async () => {
        await handler.getRefreshToken();
        //clear params
        navigate('/email-reports');
      })();
    }
  }, [queryCode]);

  const handleAuth = (outh2Url: string, cloudStorageType: string) => {
    const redirectUri = `${process.env.REACT_APP_BASE_URL}/email-reports?type=${cloudStorageType}`;
    window.open(`${outh2Url}&redirect_uri=${redirectUri}`, '_self');
  };
  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports Log"
        extra={[
          <div key={1} className="flex justify-center items-center space-x-3">
            <p className="text-gray-600">Add cloud storages: </p>
            <GoogleDriveIcon
              className="shadow-md rounded-md p-1 cursor-pointer"
              height={'2.5rem'}
              width={'2.5rem'}
              onClick={() =>
                handleAuth(googleDriveOuth2Url, CLOUD_STORAGES.GOOGLE_DRIVE)
              }
            />
            <DropboxIcon
              className="shadow-md rounded-md p-1 cursor-pointer"
              height={'2.5rem'}
              width={'2.5rem'}
              onClick={() =>
                handleAuth(dropboxOuth2Url, CLOUD_STORAGES.DROPBOX)
              }
            />
          </div>,
        ]}
      />
      <AddCloudStorageSettings />
      <div className="space-y-4 w-full">
        <CloudStoragesSettingsTable />
      </div>
    </div>
  );
};

export default EmailReports;
