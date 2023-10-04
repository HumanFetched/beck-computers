import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  ITableColumn,
  ITableRenderProps,
  Loader,
  Modal,
  PageHeader,
  Pagination,
  Popconfirm,
  Result,
  Table,
} from '../../lib/components';
import { nseApi } from '../../lib/services';
import {
  providerGroupsActions,
  providerGroupsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { SECONDARY_COLOR } from '../../lib/utils/constants';
import { IDomain, IProviderGroup } from '../../lib/types';
import moment from 'moment';
import { CreateProviderGroup } from '../../lib/containers';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../lib/utils/helper';
import { usePagination } from '../../lib/hooks';

/* eslint-disable-next-line */
export interface ProviderGroupsProps {}

export const ProviderGroups: React.FC<ProviderGroupsProps> = () => {
  // hooks here
  const disptch = useAppDispatch();
  const providerGroups = useAppSelector((state) =>
    providerGroupsSelector.selectAll(state),
  );
  const { isLoading, limit, totalDocs, page } = useAppSelector(
    (state) => state.providerGroups,
  );
  const navigate = useNavigate();
  const query = useQuery();
  const domain = query.get('domain');

  // local state here
  const [createGroupModal, setCreateGroupModal] = useState({
    isVisible: false,
  });

  const getListProviderGroup = () => {
    disptch(
      nseApi.endpoints.listProviderGroups.initiate({
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

  const { currentPage, setCurrentPage, onRecordAdd, onRecordDelete } =
    usePagination(page, providerGroups?.length, getListProviderGroup);

  const deleteProviderGroup = (id: string) => {
    disptch(
      nseApi.endpoints.deleteProviderGroup.initiate({
        id,
      }),
    )
      .unwrap()
      .then(() => {
        onRecordDelete();
        toast('Group deleted successfully !', {
          type: 'success',
        });
      })
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

  const getColumns = (): ITableColumn[] => {
    return [
      {
        title: 'Group name',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        render: ({ text }: ITableRenderProps<IProviderGroup>) => {
          return <p className="text-secondary mr-5">{text}</p>;
        },
      },
      {
        title: 'Domain',
        dataIndex: 'domain',
        key: 'domain',
        render: ({ record }: ITableRenderProps<IProviderGroup>) => {
          return (
            <>
              {(record?.domain as IDomain[])[0]?.domain
                ? (record?.domain as IDomain[])[0]?.domain
                : '-'}
            </>
          );
        },
      },
      {
        title: 'Created date',
        dataIndex: 'createdAt',
        key: 'createdAt',
        align: 'center',
        render: ({ text }: ITableRenderProps<IProviderGroup>) => {
          return <>{moment(text).format('MMMM DD, YYYY')}</>;
        },
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: ({ record }: ITableRenderProps<IProviderGroup>) => {
          return (
            <div className="flex items-center justify-center space-x-3">
              <PencilAltIcon
                className="w-5 h-5 text-primary cursor-pointer"
                onClick={() => navigate(`/group-config/${record._id}`)}
              />
              <span>|</span>
              <Popconfirm
                title="Sure want to delete this group ?"
                onConfirm={() => {
                  deleteProviderGroup(record._id);
                }}
              >
                <TrashIcon className="text-primary w-5 h-5 cursor-pointer" />
              </Popconfirm>
            </div>
          );
        },
      },
    ];
  };

  useEffect(() => {
    getListProviderGroup();
    return () => {
      disptch(providerGroupsActions.reset());
    };
  }, []);

  return (
    <div className="w-full space-y-3">
      <Loader loading={isLoading} color={SECONDARY_COLOR}>
        <div className="space-y-8">
          <PageHeader
            title="SMTP Groups"
            description="configure and view SMTP group and routing logic for each of your verified domains."
            extra={[
              <Button
                disabled={isLoading}
                key="1"
                onClick={() => {
                  setCreateGroupModal((prevState) => {
                    return {
                      ...prevState,
                      isVisible: true,
                    };
                  });
                }}
              >
                Create SMTP group
              </Button>,
            ]}
          />
          <div className="h-full flex justify-center items-center flex-col">
            {providerGroups && providerGroups.length > 0 && (
              <Table columns={getColumns()} dataSource={providerGroups} />
            )}
            {((!isLoading && !providerGroups) || !providerGroups.length) && (
              <Result
                subTitle="No SMTP groups have been created. Create an SMTP group for your verified domains"
                status="empty"
                extra={[
                  <Button
                    disabled={isLoading}
                    key="create"
                    onClick={() => {
                      setCreateGroupModal((prevState) => {
                        return {
                          ...prevState,
                          isVisible: true,
                        };
                      });
                    }}
                  >
                    Create SMTP group
                  </Button>,
                ]}
              />
            )}
          </div>
        </div>
      </Loader>
      <Modal
        title="Create Group"
        visible={createGroupModal.isVisible}
        setVisible={(status) =>
          setCreateGroupModal((prevState) => {
            return {
              ...prevState,
              isVisible: status,
            };
          })
        }
        footer={false}
      >
        <CreateProviderGroup
          domain={domain}
          onProviderCreateGroup={() => {
            onRecordAdd();
            setCreateGroupModal((prevState) => {
              return {
                ...prevState,
                isVisible: false,
              };
            });
          }}
        />
      </Modal>
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

export default ProviderGroups;
