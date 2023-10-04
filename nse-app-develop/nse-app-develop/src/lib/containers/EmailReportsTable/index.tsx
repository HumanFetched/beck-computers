/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { toast } from 'react-toastify';
import {
  ITableRenderProps,
  Pagination,
  Table,
  TableProps,
  Tag,
  TagType,
} from '../../components';
import { nseApi } from '../../services';
import {
  useAppDispatch,
  useAppSelector,
  reportSelector,
  // emailReportActions,
  // emailProvidersSelector,
} from '../../state';
import { IEmailReport, IFilter } from '../../types';
import { usePagination } from '../../hooks';
import { defaultFilter } from '../../../pages/Traffic';
import moment from 'moment';

export const statusMapping: { [key: string]: TagType } = {
  sent: 'success',
  delivered: 'success',
  queued: 'warning',
  fail: 'error',
  failed: 'error',
  spam: 'error',
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmailReportsTableProps {
  filter: IFilter;
  search?: string;
}

const EmailReportsTable: React.FC<IEmailReportsTableProps> = ({
  filter = defaultFilter,
  search = '',
}) => {
  const dispatch = useAppDispatch();

  // Redux states
  const reports = useAppSelector((state) => reportSelector.selectAll(state));
  const {
    limit,
    totalDocs,
    page,
    isLoading: isEmailReportsLoading,
  } = useAppSelector((state) => state.emailReports);

  // const getAllProviders = () => {
  //   dispatch(
  //     nseApi.endpoints.listEmailProviders.initiate({
  //       page: 1,
  //       limit: 100,
  //     }),
  //   )
  //     .unwrap()
  //     .catch((err) => {
  //       toast(
  //         err.data?.message ||
  //           'Something went wrong while fetching email providers. Please try again',
  //         {
  //           type: 'error',
  //         },
  //       );
  //     });
  // };

  // //reset email reports list
  // useEffect(() => {
  //   getAllProviders();
  //   return () => {
  //     dispatch(emailReportActions.reset());
  //   };
  // }, []);

  //listEmailReports
  const listEmailReports = () => {
    if (search?.replaceAll(' ', '')) {
      dispatch(
        nseApi.endpoints.searchEmailReports.initiate({
          page: currentPage,
          limit,
          q: search,
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

    let status = '';
    if (filter?.status)
      status = filter.status.slice(...(filter.status[0] === '|' ? [1] : []));

    dispatch(
      nseApi.endpoints.listEmailReports.initiate({
        page: currentPage,
        limit,
        fields:
          'domain,sender,recipient,subject,status,error,updatedAt,providerDetails,emailProvider,isNotified,hasAttachment',
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
    listEmailReports,
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

  const emailReportsTableArgs: TableProps = {
    //
    columns: [
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
        title: 'Timestamp﻿',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          const timeStamp = text
            ? moment(text).format('YYYY-MM-DD, h:mm:ss a')
            : 'NA';
          return <>{timeStamp}</>;
        },
      },
      {
        title: 'From Email',
        dataIndex: 'sender',
        key: 'sender',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text || 'NA'}</>;
        },
      },

      {
        title: 'To Email',
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
        title: 'GROUP: Vendor',
        dataIndex: 'Provider',
        key: 'provider',
        tooltip: true,
        render: ({ record }: ITableRenderProps<IEmailReport>) => {
          const groupVendor =
            record?.group?.name || record.emailProvider?.name
              ? handleProvider(record)
              : 'NA';
          return <>{groupVendor}</>;
        },
      },
      {
        title: 'Notified',
        dataIndex: 'isNotified',
        key: 'isNotified',
        render: ({ text }: ITableRenderProps<IEmailReport>) => {
          return <>{text ? 'Yes' : 'No'}</>;
        },
      },
    ],
    dataSource: reports,
    isResizable: true,
  };

  return (
    <div className="space-y-3">
      <Table {...emailReportsTableArgs} loading={isEmailReportsLoading} />
      <Pagination
        disabled={isEmailReportsLoading}
        total={totalDocs}
        current={currentPage}
        pageSize={limit}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default EmailReportsTable;
