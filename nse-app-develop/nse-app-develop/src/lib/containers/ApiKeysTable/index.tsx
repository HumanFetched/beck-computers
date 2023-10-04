import {
  CheckCircleIcon,
  PencilAltIcon,
  TrashIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  CopyText,
  ITableRenderProps,
  Pagination,
  Popconfirm,
  Table,
  TableProps,
  Toggle,
} from '../../components';
import { nseApi } from '../../services';
import {
  apiKeyActions,
  apiKeySelector,
  useAppDispatch,
  useAppSelector,
} from '../../../lib/state';
import { IApiKey, IUpdateApiKeyRequest } from '../../../lib/types';
import { usePagination } from '../../hooks';

export interface IApiKeysTableProps {
  handleApiKeyEdit: (id: string) => void;
}

const ApiKeysTable: React.FC<IApiKeysTableProps> = ({ handleApiKeyEdit }) => {
  const dispatch = useAppDispatch();

  // Redux states
  const apiKeys = useAppSelector((state) => apiKeySelector.selectAll(state));
  const { isLoading, limit, totalDocs, page } = useAppSelector(
    (state) => state.apiKey,
  );

  //listApiKeys
  const listApiKeys = () => {
    dispatch(
      nseApi.endpoints.listApiKeys.initiate({
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
    apiKeys?.length,
    listApiKeys,
  );

  useEffect(() => {
    return () => {
      dispatch(apiKeyActions.reset());
    };
  }, []);

  const handleUpdateStatus = (data: IUpdateApiKeyRequest) => {
    dispatch(nseApi.endpoints.updateApiKey.initiate(data))
      .unwrap()
      .then(() => {
        toast.success(`Api Key status updated successfully`);
      })
      .catch((err) => {
        toast.error(err.data?.message || `Something went wrong`);
      });
  };

  const handleDelete = (id: string) => {
    dispatch(
      nseApi.endpoints.deleteApiKey.initiate({
        id,
      }),
    )
      .unwrap()
      .then(() => {
        onRecordDelete();
        toast.success(`Api Key deleted successfully`);
      })
      .catch((err) => {
        toast.error(err.data?.message || `Something went wrong`);
      });
  };

  const apiTableArgs: TableProps = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: ({ text }: ITableRenderProps<IApiKey>) => {
          return <p className="text-secondary truncate">{text}</p>;
        },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IApiKey>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render: ({ record }: ITableRenderProps<IApiKey>) => {
          return (
            <div className="space-x-1 flex items-center">
              {record.isActive ? (
                <>
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>Active</span>
                </>
              ) : (
                <>
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span>Disabled</span>
                </>
              )}
            </div>
          );
        },
      },
      {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
        width: 50,
        render: ({ text }: ITableRenderProps<IApiKey>) => {
          return (
            <CopyText text={text} classNames="text-sm truncate">
              {text}
            </CopyText>
          );
        },
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: ({ record }: ITableRenderProps<IApiKey>) => {
          return (
            <div className="flex space-x-3 items-center">
              <Toggle
                checked={record.isActive || false}
                size="small"
                onChange={(status) => {
                  handleUpdateStatus({
                    id: record._id,
                    body: { isActive: status },
                  });
                }}
              />
              <span>|</span>
              <PencilAltIcon
                className="w-5 h-5 text-primary cursor-pointer"
                onClick={() => handleApiKeyEdit(record._id)}
              />
              <span>|</span>
              <Popconfirm
                title="Are you sure you want to delete this domain?"
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
    dataSource: apiKeys,
  };

  return (
    <div className="space-y-3">
      <Table {...apiTableArgs} loading={isLoading} />
      <Pagination
        disabled={isLoading}
        total={totalDocs}
        current={currentPage}
        pageSize={limit}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ApiKeysTable;
