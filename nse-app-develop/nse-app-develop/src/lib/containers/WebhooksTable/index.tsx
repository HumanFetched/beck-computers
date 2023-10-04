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
} from '../../components';
import { nseApi } from '../../services';
import {
  webhookSelector,
  useAppDispatch,
  useAppSelector,
  webhookActions,
  emailProvidersSelector,
  emailReportActions,
} from '../../../lib/state';
import { IWebhook } from '../../../lib/types';
import { usePagination } from '../../hooks';

export interface IWebhooksTableProps {
  handleWebhookEdit: (id: string) => void;
}

const webhooksTable: React.FC<IWebhooksTableProps> = ({
  handleWebhookEdit,
}) => {
  const dispatch = useAppDispatch();

  // Redux states
  const webhooks = useAppSelector((state) => webhookSelector.selectAll(state));
  const {
    limit,
    totalDocs,
    page,
    isLoading: isWebhookLoading,
  } = useAppSelector((state) => state.webhooks);
  const emailProviders = useAppSelector((state) =>
    emailProvidersSelector.selectAll(state),
  );

  //listApiKeys
  const listWebhooks = () => {
    dispatch(
      nseApi.endpoints.listWebhooks.initiate({
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

  const getAllProviders = () => {
    dispatch(
      nseApi.endpoints.listEmailProviders.initiate({
        page: 1,
        limit: 100,
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
  };

  const { currentPage, setCurrentPage, onRecordDelete } = usePagination(
    page,
    webhooks?.length,
    listWebhooks,
  );

  const getProvider = (id: string) => {
    const provider = emailProviders.find((provider) => provider._id === id);
    return provider?.name;
  };

  //reset webhooks list
  useEffect(() => {
    getAllProviders();
    return () => {
      dispatch(webhookActions.reset());
      dispatch(emailReportActions.reset());
    };
  }, []);

  const handleStatusUpdate = (record: IWebhook, status: boolean) => {
    dispatch(
      nseApi.endpoints.updateWebhook.initiate({
        id: record?._id,
        body: {
          ...record,
          isActive: status,
        },
      }),
    )
      .unwrap()
      .then(() => {
        toast.success(`Updated successfully`);
      })
      .catch((err) => {
        toast.error(err.data?.message || `Something went wrong`);
      });
  };

  const handleDelete = (id: string) => {
    dispatch(
      nseApi.endpoints.deleteWebhook.initiate({
        id,
      }),
    )
      .unwrap()
      .then(() => {
        onRecordDelete();
        toast.success(`Webhook deleted successfully`);
      })
      .catch((err) => {
        toast.error(err.data?.message || `Something went wrong`);
      });
  };

  const webhookTableArgs: TableProps = {
    columns: [
      {
        title: 'SMTP Account',
        dataIndex: 'name',
        key: 'name',
        render: ({ text }: ITableRenderProps<IWebhook>) => {
          return (
            <>
              {text ? (
                <p className="text-secondary truncate">{text}</p>
              ) : (
                <p>NA</p>
              )}
            </>
          );
        },
      },
      {
        title: 'SMTP Vendor',
        dataIndex: 'provider',
        key: 'provider',
        render: ({ text }: ITableRenderProps<IWebhook>) => {
          return <>{getProvider(text) || 'NA'}</>;
        },
      },
      {
        title: 'Webhook',
        dataIndex: 'isActive',
        key: 'isActive',
        render: ({ record }: ITableRenderProps<IWebhook>) => {
          return (
            <p className="text-gray-500 text-sm grid grid-cols-2 gap-x-2  max-w-[7rem] ">
              <span className="mt-0.5">
                {record.isActive ? 'Enabled' : 'Disabled'}
              </span>
              <Toggle
                checked={record.isActive}
                onChange={(status) => handleStatusUpdate(record, status)}
              />
            </p>
          );
        },
      },
      {
        title: 'Notes',
        dataIndex: 'description',
        key: 'description',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IWebhook>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: ({ record }: ITableRenderProps<IWebhook>) => {
          return (
            <div className="flex space-x-3 items-center">
              <PencilAltIcon
                className="w-5 h-5 text-primary cursor-pointer"
                onClick={() => handleWebhookEdit(record._id)}
              />
              <span>|</span>
              <Popconfirm
                title="Are you sure you want to delete this webhook?"
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
    dataSource: webhooks,
  };

  return (
    <div className="space-y-3">
      <Table {...webhookTableArgs} loading={isWebhookLoading} />
      <Pagination
        disabled={isWebhookLoading}
        total={totalDocs}
        current={currentPage}
        pageSize={limit}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default webhooksTable;
