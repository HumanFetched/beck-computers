import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Error } from '../../lib/components';
// import { VerifyPhone } from '../../lib/containers';
import { nseApi } from '../../lib/services';
import { useAppDispatch, useAppSelector } from '../../lib/state';
import { LOGO_125x125 } from '../../lib/utils/constants';
import { globalMenu } from '../../lib/utils/constants/menu';
import {
  DomainSettings,
  Profile,
  ProviderGroupConfig,
  ProviderGroups,
  UserSettings,
  Home,
  NotificationsMonitor,
} from '../../pages';
import ActivityLog from '../../pages/ActivityLog';
import ApiKeys from '../../pages/ApiKeys';
import Dashboard from '../../pages/Dashboard';
import EmailReports from '../../pages/EmailReports';
import NotificationsSettings from '../../pages/NotificationsSettings';
// import SmtpGroup from '../../pages/SmtpGroup';
import SmtpProviders from '../../pages/SmtpProviders';
import Support from '../../pages/Support';
import Terms from '../../pages/Terms';
import { Traffic } from '../../pages/Traffic';
import Webhooks from '../../pages/Webhooks';
import { BasicLayout } from '../Basic';

/* eslint-disable-next-line */
export interface SecurityLayoutProps {}

export const SecurityLayout: React.FC<SecurityLayoutProps> = () => {
  const {
    // currentUser,
    isLoading,
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // local state here
  const [isAuthUser, setIsAuthUser] = useState(false);

  useEffect(() => {
    // make the authentication and fetch user details call here
    dispatch(nseApi.endpoints.authUser.initiate({}))
      .unwrap()
      .then(() => {
        setIsAuthUser(true);
      })
      .catch(() => {
        setIsAuthUser(false);
        navigate('/user/signin');
      });
  }, []);

  return (
    <>
      {isAuthUser || !isLoading ? (
        <BasicLayout
          title=""
          appTitle="Non Stop Email"
          logo={LOGO_125x125}
          menuItems={globalMenu}
        >
          {/* <Modal
            visible={!currentUser.phone || false}
            setVisible={(status) => {
              console.log(status);
            }}
            widthClass="max-w-4xl"
            footer={false}
            isClosable={false}
            centered
          >
            <VerifyPhone onVerifySuccess={() => console.log('Verified')} />
          </Modal> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />\
            <Route path="/traffic" element={<Traffic />} />
            <Route
              path="/notifications-monitor"
              element={<NotificationsMonitor />}
            />
            <Route path="/email-reports" element={<EmailReports />} />
            <Route path="/domain-settings" element={<DomainSettings />} />
            <Route path="/provider-groups" element={<ProviderGroups />} />
            <Route path="/group-config/:id" element={<ProviderGroupConfig />} />
            <Route path="/smtp-providers" element={<SmtpProviders />} />
            {/* <Route path="/smtp-group" element={<SmtpGroup />} /> */}
            <Route
              path="/notifications/rules"
              element={<NotificationsSettings />}
            />
            <Route path="/webhooks" element={<Webhooks />} />
            <Route path="/api-keys" element={<ApiKeys />} />
            <Route path="/user-settings" element={<UserSettings />} />
            <Route path="/activity-log" element={<ActivityLog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route
              path="/*"
              element={
                <Error
                  type="404"
                  subtitle="Sorry, the page you visited does not exist."
                />
              }
            />
          </Routes>
        </BasicLayout>
      ) : // TODO:show loader here
      null}
    </>
  );
};

export default SecurityLayout;
