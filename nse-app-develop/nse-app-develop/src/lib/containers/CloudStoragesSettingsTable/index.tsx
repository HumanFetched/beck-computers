import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { CloudUploadIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
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
  cloudStoragesSettingsSelector,
  useAppDispatch,
  useAppSelector,
  cloudStoragesSettingsActions,
} from '../../state';
import {
  ICloudStorageSettings,
  ICloudStorageTypes,
  IUpdateCloudStorageSettingsRequestBody,
} from '../../types';
import { usePagination } from '../../hooks';
import { UpdateCloudStorageSettings } from '../AddUpdateCloudStorageSettings';

const cloudStorageMapping: { [key: string]: string } = {
  GOOGLE_DRIVE: 'Google Drive',
  DROPBOX: 'Dropbox',
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICloudStoragesSettingsTableProps {}

const CloudStoragesSettingsTable: React.FC<
  ICloudStoragesSettingsTableProps
> = () => {
  const dispatch = useAppDispatch();

  // Redux states
  const reportsCloudPlatform = useAppSelector((state) =>
    cloudStoragesSettingsSelector.selectAll(state),
  );
  const {
    limit,
    totalDocs,
    page,
    isLoading: isReportsCloudPlatformLoading,
  } = useAppSelector((state) => state.cloudStoragesSettings);

  // local states
  const [isExporting, setIsExporting] = useState(false);
  const [updateModalVisibility, setUpdateModalVisibility] = useState(false);
  const [cloudStorageId, setCloudStorageId] = useState('');

  //listApiKeys
  const listCloudStoragesSettings = () => {
    dispatch(
      nseApi.endpoints.listCloudStoragesSettings.initiate({
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
    reportsCloudPlatform?.length,
    listCloudStoragesSettings,
  );

  //reset notification setting list
  useEffect(() => {
    return () => {
      dispatch(cloudStoragesSettingsActions.reset());
    };
  }, []);

  const handleDelete = (id: string) => {
    dispatch(
      nseApi.endpoints.deleteCloudStorageSettings.initiate({
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

  const handleUpdateCloudStorageSetting = (
    body: IUpdateCloudStorageSettingsRequestBody,
    id: string,
  ) => {
    dispatch(
      nseApi.endpoints.updateCloudStorageSettings.initiate({
        id,
        body: body,
      }),
    ).then(() => listCloudStoragesSettings());
  };

  const exportToCloudStorage = (cloudPlatform: ICloudStorageTypes) => {
    setIsExporting(true);
    const from = new Date();
    from.setHours(0, 0, 0, 0);
    dispatch(
      nseApi.endpoints.exportToCloudStorage.initiate({
        cloudPlatform,
        fromDuration: from,
        toDuration: new Date(),
      }),
    )
      .then(() => {
        toast.info(
          `Your reports are being generated, check your cloud storage after sometime.`,
        );
      })
      .catch((err) => {
        toast.error(err.data?.message || `Something went wrong`);
      })
      .finally(() => setIsExporting(false));
  };

  const cloudPlatformTableArgs: TableProps = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: ({ text }: ITableRenderProps<ICloudStorageSettings>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: ({ text }: ITableRenderProps<ICloudStorageSettings>) => {
          return <>{text}</>;
        },
      },
      {
        title: 'Cloud Storage',
        dataIndex: 'cloudStorageName',
        key: 'cloudStorageName',
        render: ({ text }: ITableRenderProps<ICloudStorageSettings>) => {
          return (
            <>{text ? <>{cloudStorageMapping[text as string]}</> : 'NA'}</>
          );
        },
      },
      {
        title: 'Save Reports',
        dataIndex: 'isActive',
        key: 'isActive',
        render: ({ record }: ITableRenderProps<ICloudStorageSettings>) => {
          return (
            <Toggle
              checked={record.isActive}
              onChange={(status) =>
                handleUpdateCloudStorageSetting(
                  {
                    isActive: status,
                  },
                  record._id,
                )
              }
            />
          );
        },
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: ({ record }: ITableRenderProps<ICloudStorageSettings>) => {
          return (
            <div className="flex space-x-3 items-center">
              <CloudUploadIcon
                className={`w-5 h-5 text-primary cursor-pointer ${
                  isExporting && 'opacity-50 cursor-wait'
                }`}
                onClick={() => {
                  if (!isExporting)
                    exportToCloudStorage(record.cloudStorageName);
                }}
              />
              <span>|</span>
              <PencilAltIcon
                className="w-5 h-5 text-primary cursor-pointer"
                onClick={() => {
                  setCloudStorageId(record._id);
                  setUpdateModalVisibility(true);
                }}
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
    dataSource: reportsCloudPlatform,
  };

  return (
    <div className="space-y-3">
      <Table
        {...cloudPlatformTableArgs}
        loading={isReportsCloudPlatformLoading}
      />
      <UpdateCloudStorageSettings
        cloudStorageId={cloudStorageId}
        updateModalVisibility={updateModalVisibility}
        setUpdateModalVisibility={setUpdateModalVisibility}
      />
      <Pagination
        disabled={isReportsCloudPlatformLoading}
        total={totalDocs}
        current={currentPage}
        pageSize={limit}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CloudStoragesSettingsTable;
