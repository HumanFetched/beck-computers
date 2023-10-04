import React, { useState } from 'react';
import { Button, Modal, PageHeader } from '../../lib/components';
import { AddUpdateNotificationsSettings } from '../../lib/containers/AddUpdateNotificationsSettings';
import NotificationsSettingsTable from '../../lib/containers/NotificationsSettingsTable';

const NotificationsSettings = () => {
  //local states
  const [isNotificationModalVisible, setIsNotificationModalVisible] =
    useState(false);
  const [notificationsSettingId, setNotificationsSettingId] = useState('');

  return (
    <div className="space-y-8">
      <PageHeader
        title="Notifications Rules"
        extra={[
          <Button key="1" onClick={() => setIsNotificationModalVisible(true)}>
            Add Rule
          </Button>,
        ]}
      />

      <div className="space-y-4 w-full">
        <NotificationsSettingsTable
          handleNotificationEdit={(id) => {
            setNotificationsSettingId(id);
            setIsNotificationModalVisible(true);
          }}
        />
        <Modal
          visible={isNotificationModalVisible}
          setVisible={setIsNotificationModalVisible}
          footer={false}
          title={`Notification Rules`}
          centered
          onClose={() => setNotificationsSettingId('')}
          onCancel={() => setIsNotificationModalVisible(false)}
        >
          <AddUpdateNotificationsSettings
            notificationsSettingId={notificationsSettingId}
            setNotificationsSettingId={setNotificationsSettingId}
            closeModal={() => {
              setIsNotificationModalVisible(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default NotificationsSettings;
