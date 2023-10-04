import {
  ClipboardListIcon,
  CogIcon,
  LogoutIcon,
  ChartBarIcon,
  // ChartPieIcon,
  UserCircleIcon,
  BellIcon,
  CloudDownloadIcon,
} from '@heroicons/react/solid';

export const globalMenu = [
  {
    name: 'Dashboard',
    id: '1',
    icon: ChartBarIcon,
    current: true,
    href: '/dashboard',
  },
  {
    name: `Notification Events`,
    id: '2',
    icon: BellIcon,
    current: false,
    href: '/notifications-monitor',
  },
  {
    name: `SMTP Traffic`,
    id: '3',
    icon: ClipboardListIcon,
    current: false,
    href: '/traffic',
  },
  {
    name: 'Reports Log',
    id: '4',
    href: '/email-reports?page=1',
    icon: CloudDownloadIcon,
  },
  {
    name: 'Settings',
    id: '5',
    href: '/settings',
    icon: CogIcon,
    children: [
      { name: 'Domains', href: 'domain-settings?page=1', id: '51' },
      { name: 'SMTP Accounts', href: 'webhooks?page=1', id: '52' },
      { name: 'SMTP Logins / APIs', href: '#', id: '53' },
      { name: 'SMTP Groups', href: 'provider-groups?page=1', id: '54' },
      {
        name: 'Notification Rules',
        href: 'notifications/rules?page=1',
        id: '55',
      },
      {
        name: 'Setup Reports',
        href: '#',
        id: '56',
      },

      { name: 'Special Emails', href: '#', id: '57' },
      { name: 'Integrations', href: '#', id: '58' },
      // { name: 'Api Keys', href: 'api-keys?page=1', id: '59' },
      { name: 'Personalization', href: '#', id: '510' },
    ],
  },
  {
    name: 'Admin',
    icon: UserCircleIcon,
    id: '6',
    href: '/admin',
    children: [
      { name: 'Users', href: 'user-settings', id: '61' },
      { name: 'Activity Logs', href: 'activity-log', id: '62' },
      { name: 'Support', href: 'support', id: '63' },
      { name: 'Terms & Conditions', href: 'terms', id: '64' },

      { name: 'Partners & Affiliates', href: '#', id: '65' },
    ],
  },
];

export const userNavigation = [
  {
    name: 'Settings',
    href: '/user-settings',
    icon: CogIcon,
  },
  {
    name: 'Logout',
    href: '/user/logout',
    icon: LogoutIcon,
  },
];
