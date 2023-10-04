import React from 'react';
import { toast } from 'react-toastify';
import {
  ITableRenderProps,
  Pagination,
  Table,
  TableProps,
  Tag,
  TagType,
  Tooltip,
} from '../../components';
import { nseApi } from '../../services';
import {
  useAppDispatch,
  useAppSelector,
  notificationsMonitorSelector,
} from '../../state';
import { IEmailReport, IFilter } from '../../types';
import { usePagination } from '../../hooks';
import moment from 'moment';
import { defaultFilter } from '../../../pages/Traffic';

export const statusMapping: { [key: string]: TagType } = {
  sent: 'success',
  delivered: 'success',
  queued: 'warning',
  fail: 'error',
  failed: 'error',
  spam: 'error',
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INotificationsMonitorTableProps {
  filter: IFilter;
  search?: string;
}

const NotificationsMonitorTable: React.FC<INotificationsMonitorTableProps> = ({
  filter = defaultFilter,
  search = '',
}) => {
  const dispatch = useAppDispatch();

  // Redux states
  const reports = useAppSelector((state) =>
    notificationsMonitorSelector.selectAll(state),
  );

  const {
    limit,
    totalDocs,
    page,
    isLoading: isNotificationsMonitorLoading,
  } = useAppSelector((state) => state.notificationsMonitor);

  //listNotificationReports
  const listNotificationReports = () => {
    if (search?.replaceAll(' ', '')) {
      dispatch(
        nseApi.endpoints.searchNotificationReports.initiate({
          page: currentPage,
          limit,
          q: search,
          filter: {
            status: 'BOUNCE|DROPPED|FAILED|SPAM',
          },
        }),
      )
        .unwrap()
        .catch((err) => {
          toast(
            err.data?.message ||
              'Something went wrong while fetching email providers. Please try again',
            {
              type: 'error',
            },
          );
        });
      return;
    }

    let status = 'BOUNCE|DROPPED|FAILED|SPAM';
    if (filter?.status)
      status = filter.status.slice(...(filter.status[0] === '|' ? [1] : []));

    dispatch(
      nseApi.endpoints.listNotificationsMonitor.initiate({
        page: currentPage,
        limit,
        fields:
          'isNotified,notifiedAt,sender,recipient,subject,notificationFrom,notificationTo,status,group,bounceDetailShort,bounceDetailLong',
        filter: {
          ...(filter?.domain && { domain: filter?.domain }),
          ...(filter?.sender && { sender: filter?.sender }),
          ...(filter.toDomain &&
            !filter.recipient && { toDomain: filter.toDomain }),
          ...((filter.recipient || filter.toDomain) && {
            recipient: filter.recipient,
          }),
          ...(filter?.group && { group: filter?.group }),
          ...(status && {
            status: status,
          }),
          ...(filter?.hasAttachment && { hasAttachment: true }),
        },
        ...(filter?.fromDuration && {
          fromDuration: filter.fromDuration,
        }),
        ...(filter?.toDuration && {
          toDuration: filter.toDuration,
        }),
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

  const { currentPage, setCurrentPage } = usePagination(
    page,
    reports?.length,
    listNotificationReports,
  );

  const handleProvider = (record: IEmailReport) => {
    let provider = '';
    if (record?.group?.name) {
      provider = `${record?.group?.name}:`;
    }
    if (record.emailProvider?.name) {
      provider = `${provider} ${
        (record.emailProvider?.name as unknown as string) || ''
      }`;
    }
    return provider;
  };

  const notificationsMonitorTableArgs: TableProps = {
    columns: [
      {
        title: 'Notified',
        dataIndex: 'isNotified',
        key: 'isNotified',
        render: ({ record }: ITableRenderProps<IEmailReport>) => {
          return (
            <>
              {record?.isNotified === false &&
              record.notificationTo?.length === 0
                ? 'Not Setup'
                : record?.isNotified
                ? 'Yes'
                : 'No'}
            </>
          );
        },
      },
      {
        title: 'Timestamp',
        dataIndex: 'notifiedAt',
        key: 'notifiedAt',
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          const timeStamp = text
            ? moment(text).format('YYYY-MM-DD, h:mm:ss a')
            : 'NA';
          return <>{timeStamp}</>;
        },
      },
      {
        title: 'Sender (FROM)',
        dataIndex: 'sender',
        key: 'sender',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Recipient (TO)',
        dataIndex: 'recipient',
        key: 'recipient',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'From (Notified)',
        dataIndex: 'notificationFrom',
        key: 'notificationFrom',
        tooltip: true,
        render: ({ record }: ITableRenderProps<IEmailReport>) => {
          const notificationFrom =
            record?.notificationFrom &&
            record.notificationFrom?.toString().length
              ? record.notificationFrom.toString()
              : 'NA';
          return <>{notificationFrom}</>;
        },
      },
      {
        title: 'To (Notified)',
        dataIndex: 'notificationTo',
        key: 'notificationTo',
        tooltip: true,
        render: ({ record }: ITableRenderProps<IEmailReport>) => {
          return (
            <>
              {record?.notificationTo?.length ? (
                <Tooltip
                  title={record.notificationTo
                    .toString()
                    .replaceAll(',', ',\n')}
                >
                  <>{record.notificationTo.toString().replaceAll(',', ', ')}</>
                </Tooltip>
              ) : (
                'NA'
              )}
            </>
          );
        },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return (
            <Tag type={statusMapping[text.toLocaleLowerCase()]}>
              {text.toLocaleUpperCase()}
            </Tag>
          );
        },
      },
      {
        title: 'GROUP: Vendor',
        dataIndex: 'Provider',
        key: 'provider',
        tooltip: true,
        render: ({ record }: ITableRenderProps<IEmailReport>) => {
          const groupVendor =
            record?.group?.name || record.emailProvider?.name
              ? handleProvider(record)
              : 'NA';
          return <p className="truncate">{groupVendor}</p>;
        },
      },
      {
        title: 'Bounce Detail (Short)',
        dataIndex: 'bounceDetailShort',
        key: 'bounceDetailShort',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Bounce Detail (Long)',
        dataIndex: 'bounceDetailLong',
        key: 'bounceDetailLong',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text || 'NA'}</>;
        },
      },
    ],
    dataSource: reports,
    isResizable: true,
  };

  return (
    <div className="space-y-3">
      <Table
        {...notificationsMonitorTableArgs}
        loading={isNotificationsMonitorLoading}
      />
      <Pagination
        disabled={isNotificationsMonitorLoading}
        total={totalDocs}
        current={currentPage}
        pageSize={limit}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default NotificationsMonitorTable;
