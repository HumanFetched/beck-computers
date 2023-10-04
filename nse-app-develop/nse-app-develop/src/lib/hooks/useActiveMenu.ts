import { useState, useEffect } from 'react';

const selectedPathObject = [
  {
    path: 'dashboard',
    activeTab: '1',
  },
  {
    path: 'notifications-monitor',
    activeTab: '2',
  },
  {
    path: 'traffic',
    activeTab: '3',
  },
  {
    path: 'email-report',
    activeTab: '4',
  },
  {
    path: 'domain-settings',
    activeTab: '51',
  },

  {
    path: 'webhooks',
    activeTab: '52',
  },
  {
    path: 'provider-groups',
    activeTab: '54',
  },
  {
    path: 'notifications',
    activeTab: '55',
  },
  {
    path: 'api-keys',
    activeTab: '59',
  },
  {
    path: 'user-settings',
    activeTab: '61',
  },
  {
    path: 'activity-log',
    activeTab: '62',
  },
  {
    path: 'support',
    activeTab: '63',
  },
  {
    path: 'terms',
    activeTab: '64',
  },
];

export const useActiveMenu = (url: string) => {
  const [tabName, setTabName] = useState('');

  useEffect(() => {
    const tempTabName = selectedPathObject.find((tab) => {
      return url.includes(tab.path);
    });
    if (tempTabName) {
      setTabName(tempTabName.activeTab);
    }
  }, [url]);
  return tabName;
};
