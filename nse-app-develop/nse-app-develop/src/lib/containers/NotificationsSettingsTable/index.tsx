import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  ITableRenderProps,
  Pagination,
  Popconfirm,
  Table,
  TableProps,
  Toggle,
  Tooltip,
} from '../../components';
import { nseApi } from '../../services';
import {
  domainActions,
  notificationsSettingsActions,
  notificationsSettingsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../../lib/state';
import {
  INotificationsSettings,
  IUpdateNotificationsSettingsRequestBody,
} from '../../../lib/types';
import { usePagination } from '../../hooks';
import { isArray } from 'lodash';

export interface INotificationsSettingsTableProps {
  handleNotificationEdit: (id: string) => void;
}

const NotificationsSettingsTable: React.FC<
  INotificationsSettingsTableProps
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = ({ handleNotificationEdit }) => {
  const dispatch = useAppDispatch();

  // Redux states
  const notificationsSettings = useAppSelector((state) =>
    notificationsSettingsSelector.selectAll(state),
  );
  const {
    limit,
    totalDocs,
    page,
    isLoading: isNotificationsSettingsLoading,
  } = useAppSelector((state) => state.notificationsSettings);
  // const domains = useAppSelector((state) => domainSelector.selectAll(state));

  //listApiKeys
  const listNotificationsSettings = () => {
    dispatch(
      nseApi.endpoints.listNotificationsSettings.initiate({
        page: currentPage,
        limit,
      }),
    )
      .unwrap()
      .catch((err) => {
        toast(
          err.data?.message ||
            'Something went wrong. Please try after some time',
          {
            type: 'error',
          },
        );
      });
  };

  const { currentPage, setCurrentPage, onRecordDelete } = usePagination(
    page,
    notificationsSettings?.length,
    listNotificationsSettings,
  );

  const getListDomains = () => {
    dispatch(
      nseApi.endpoints.listDomains.initiate({
        page: currentPage,
        limit,
      }),
    )
      .unwrap()
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong', {
          type: 'error',
        });
      });
  };

  useEffect(() => {
    getListDomains();
    return () => {
      dispatch(domainActions.reset());
      dispatch(notificationsSettingsActions.reset());
    };
  }, []);

  const handleDelete = (id: string) => {
    dispatch(
      nseApi.endpoints.deleteNotificationsSetting.initiate({
        id,
      }),
    )
      .unwrap()
      .then(() => {
        onRecordDelete();
        toast.success(`deleted successfully`);
      })
      .catch((err) => {
        toast.error(err.data?.message || `Something went wrong`);
      });
  };

  // const getDomainOptions = (): ISelectOption[] => {
  //   return domains.map((item) => {
  //     return {
  //       label: item.domain || '',
  //       value: item.domain || '',
  //     };
  //   });
  // };

  const updateNotificationSetting = (
    id: string,
    data: IUpdateNotificationsSettingsRequestBody,
  ) => {
    dispatch(
      nseApi.endpoints.updateNotificationsSetting.initiate({
        id,
        body: {
          ...data,
        },
      }),
    )
      .unwrap()
      .then(() => {
        toast.success(`Updated successfully`);
      })
      .catch((err) => {
        toast.error(
          isArray(err.data?.message)
            ? err.data?.message[0]
            : err.data?.message || `Something went wrong`,
        );
      });
  };

  const notificationTableArgs: TableProps = {
    columns: [
      {
        title: 'From Domain',
        dataIndex: 'domain',
        key: 'domain',
        tooltip: true,
        render: ({ text }: ITableRenderProps<INotificationsSettings>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'From Email',
        dataIndex: 'email',
        key: 'email',
        tooltip: true,
        render: ({ text }: ITableRenderProps<INotificationsSettings>) => {
          return <>{text?.split('@')[0] || 'NA'}</>;
        },
      },
      {
        title: 'Max Notifications',
        dataIndex: 'Max notifications',
        key: 'maxNotifications',
        render: ({ text }: ITableRenderProps<INotificationsSettings>) => {
          return <>{+text === -1 ? 'Unlimited' : text || 'NA'}</>;
        },
      },
      {
        title: 'Notify Sender',
        dataIndex: 'notify sender',
        key: 'isNotifySender',
        width: 7,
        render: ({ record }: ITableRenderProps<INotificationsSettings>) => {
          return (
            <Toggle
              checked={record.isNotifySender}
              onChange={(status) =>
                updateNotificationSetting(record._id, {
                  isNotifySender: status,
                })
              }
            />
          );
        },
      },
      {
        title: 'Notify Emails',
        dataIndex: 'notify emails',
        key: 'notifyEmails',
        // tooltip: true,
        render: ({ text }: ITableRenderProps<INotificationsSettings>) => {
          const data = (text as unknown as string[])
            ?.join(',')
            ?.replaceAll(',', ',\n');
          return (
            <>
              {text ? (
                <Tooltip title={data}>
                  <p className="truncate">{data}</p>
                </Tooltip>
              ) : (
                <p>NA</p>
              )}
            </>
          );
        },
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        width: 7,
        render: ({ record }: ITableRenderProps<INotificationsSettings>) => {
          return (
            <Toggle
              checked={record.isActive}
              onChange={(status) =>
                updateNotificationSetting(record._id, {
                  isActive: status,
                })
              }
            />
          );
        },
      },
      {
        title: 'Notes',
        dataIndex: 'comments',
        key: 'comments',
        tooltip: true,
        render: ({ text }: ITableRenderProps<INotificationsSettings>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: ({ record }: ITableRenderProps<INotificationsSettings>) => {
          return (
            <div className="flex space-x-3 items-center">
              <PencilAltIcon
                className="w-5 h-5 text-primary cursor-pointer"
                onClick={() => handleNotificationEdit(record._id)}
              />
              <span>|</span>
              <Popconfirm
                title="Are you sure you want to delete this?"
                iconType="warning"
                onConfirm={() => handleDelete(record._id)}
              >
                <TrashIcon className="w-5 h-5 text-primary cursor-pointer" />
              </Popconfirm>
            </div>
          );
        },
      },
    ],
    dataSource: notificationsSettings,
  };

  return (
    <div className="space-y-3">
      <Table
        {...notificationTableArgs}
        loading={isNotificationsSettingsLoading}
      />
      <Pagination
        disabled={isNotificationsSettingsLoading}
        total={totalDocs}
        current={currentPage}
        pageSize={limit}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default NotificationsSettingsTable;
