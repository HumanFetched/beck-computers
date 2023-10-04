import React, { useEffect, useState } from 'react';
import { Button, Modal, PageHeader } from '../../lib/components';
import { providerGroupsActions, useAppDispatch } from '../../lib/state';
import WebhooksTable from '../../lib/containers/WebhooksTable';
import { webhookActions } from '../../lib/state/webhooks/webhooks.slice';
import AddUpdateWebhook from '../../lib/containers/AddUpdateWebhook';

const Webhooks = () => {
  const dispatch = useAppDispatch();

  //local states
  const [webhookModalVisibility, setWebhookModalVisibility] = useState(false);
  const [webhookId, setWebhookId] = useState('');

  useEffect(() => {
    return () => {
      dispatch(webhookActions.reset());
      dispatch(providerGroupsActions.reset());
    };
  }, []);
  return (
    <div className="space-y-8">
      <PageHeader
        title="SMTP Accounts"
        extra={[
          <Button key="1" onClick={() => setWebhookModalVisibility(true)}>
            Add SMTP Account
          </Button>,
        ]}
      />
      <div className="space-y-4 w-full">
        <WebhooksTable
          handleWebhookEdit={(id) => {
            setWebhookModalVisibility(true);
            setWebhookId(id);
          }}
        />
        <Modal
          visible={webhookModalVisibility}
          setVisible={(status) => setWebhookModalVisibility(status)}
          title={`SMTP Account`}
          footer={false}
          onCancel={() => {
            setWebhookModalVisibility(false);
          }}
        >
          <AddUpdateWebhook
            webhookId={webhookId}
            closeModal={() => {
              setWebhookModalVisibility(false);
            }}
            updateWebhookId={(id) => {
              setWebhookId(id);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Webhooks;
