import React, { useEffect, useState } from 'react';
import { Button, Modal, PageHeader } from '../../lib/components';
import { AddApiKey } from '../../lib/containers';
import { PlusIcon } from '@heroicons/react/solid';
import {
  apiKeyActions,
  providerGroupsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import ApiKeysTable from '../../lib/containers/ApiKeysTable';

const configMock: Record<string, string> = {
  Server: process.env.REACT_APP_SMTP_SERVER_URL || '',
  Port: '8000',
  Username: 'set any username such a email@email.com',
  Password: 'set any API key as password',
};

const ApiKeys = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.apiKey);
  const providerGroups = useAppSelector((state) =>
    providerGroupsSelector.selectAll(state),
  );

  const { isLoading: isproviderGroupsLoading } = useAppSelector(
    (state) => state.providerGroups,
  );

  //local states
  const [addApiKeyModal, setAddApiKeyModal] = useState({
    visibility: false,
  });
  const [updateApiKeyModal, setUpdateApiKeyModal] = useState({
    visibility: false,
    apiKeyId: '',
  });

  useEffect(() => {
    return () => {
      dispatch(apiKeyActions.reset());
    };
  }, []);

  return (
    <div>
      <div className="space-y-8">
        <PageHeader
          title="NSE SMTP details and API keys"
          description="Use the following configuration to establish a connection with NSE SMTP"
        />
        <div className="p-5 border-2 space-y-2 border-gray-500 flex flex-col w-full md:w-1/2">
          {Object.keys(configMock).map((title, index) => (
            <p key={`config-${index}`}>
              <span className="font-semibold text-sm">{title}</span>
              {' : '}
              <span className="text-sm">{configMock[title]}</span>
            </p>
          ))}
        </div>
        <div className="space-y-4 w-full">
          <Button
            icon={PlusIcon}
            onClick={() =>
              setAddApiKeyModal((state) => ({
                ...state,
                visibility: true,
                apikey: '',
              }))
            }
          >
            Add API Key
          </Button>
          <ApiKeysTable
            handleApiKeyEdit={(id) => {
              setUpdateApiKeyModal({
                visibility: true,
                apiKeyId: id,
              });
            }}
          />
          <Modal
            visible={addApiKeyModal.visibility}
            setVisible={(status) =>
              setAddApiKeyModal((prevState) => ({
                ...prevState,
                visibility: status,
              }))
            }
            title="Add new key"
            footer={false}
          >
            <AddApiKey
              mode="ADD"
              loading={isLoading}
              providerGroups={providerGroups}
              isproviderGroupsLoading={isproviderGroupsLoading}
              onApiKeyAdd={() => {
                setAddApiKeyModal({
                  visibility: false,
                });
              }}
            />
          </Modal>

          <Modal
            visible={updateApiKeyModal.visibility}
            setVisible={(status) =>
              setUpdateApiKeyModal((prevState) => ({
                ...prevState,
                visibility: status,
              }))
            }
            title="Update Api Key Details"
            footer={false}
          >
            <AddApiKey
              mode="UPDATE"
              loading={isLoading}
              apiKeyId={updateApiKeyModal.apiKeyId}
              providerGroups={providerGroups}
              isproviderGroupsLoading={isproviderGroupsLoading}
              onApiKeyUpdate={() => {
                setUpdateApiKeyModal({
                  visibility: false,
                  apiKeyId: '',
                });
              }}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
