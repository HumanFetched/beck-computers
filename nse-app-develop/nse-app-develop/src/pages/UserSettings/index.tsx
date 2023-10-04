import React, { useState } from 'react';
import { Modal } from '../../lib/components';
import { ProfileSetting } from '../../lib/containers';
import { useAppSelector } from '../../lib/state';

/* eslint-disable-next-line */
export interface UserSettingsProps {}

export const UserSettings: React.FC<UserSettingsProps> = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const [profileSettingModalVisibility, setProfileSettingModalVisibility] =
    useState(true);
  return (
    <Modal
      visible={profileSettingModalVisibility}
      setVisible={(status) => {
        setProfileSettingModalVisibility(status);
      }}
      widthClass="max-w-4xl"
      footer={false}
      isClosable={true}
      centered
    >
      <ProfileSetting user={currentUser} />
    </Modal>
  );
};

export default UserSettings;
