import {
  XCircleIcon,
  BadgeCheckIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  ITableRenderProps,
  Table,
  TableProps,
  Popconfirm,
  Modal,
  PageHeader,
  Pagination,
  Toggle,
} from '../../lib/components';
import { nseApi } from '../../lib/services';
import {
  domainActions,
  domainSelector,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import { IDomain, IDomainRecords, IUpdateDomainBody } from '../../lib/types';
import { usePagination } from '../../lib/hooks';
import { TrashIcon } from '@heroicons/react/solid';
import AddUpdateDomain from '../../lib/containers/AddUpdateDomain';

/* eslint-disable-next-line */
export interface DomainSettingsProps {}

export const DomainSettings: React.FC<DomainSettingsProps> = () => {
  const dispatch = useAppDispatch();

  // Redux states
  const domains = useAppSelector((state) => domainSelector.selectAll(state));
  const { isLoading, limit, totalDocs, page } = useAppSelector(
    (state) => state.domain,
  );

  //local states
  const [domainModalVisibility, setDomainModalVisibility] = useState(false);
  const [domainId, setDomainId] = useState('');

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
    if (!domainModalVisibility) return;
    getListDomains();
    return () => {
      dispatch(domainActions.reset());
    };
  }, [domainId]);

  const { currentPage, setCurrentPage, onRecordDelete } = usePagination(
    page,
    domains?.length,
    getListDomains,
  );

  const domainsData = (domains: IDomain[]) => {
    if (!domains) return [];
    if (domains.length) {
      return domains.map((domain) => {
        return {
          _id: domain._id,
          domain: domain.domain || '',
          isVerified: domain.isVerified,
          group: domain.group,
          isActive: domain.isActive,
          comments: domain.comments,
          authentication: domain?.authentication || [],
        };
      });
    } else return [];
  };

  const updateDomainSettting = (body: IUpdateDomainBody, id: string) => {
    dispatch(
      nseApi.endpoints.updateDomain.initiate({
        id,
        body: {
          ...body,
        },
      }),
    );
  };

  const handleDelete = (id: string) => {
    dispatch(
      nseApi.endpoints.deleteDomain.initiate({
        id,
      }),
    )
      .unwrap()
      .then(() => {
        onRecordDelete();
        toast('Domain deleted successfully', {
          type: 'success',
        });
      })
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong', {
          type: 'error',
        });
      });
  };

  const checkAuthentication = (authentications: IDomainRecords[]) => {
    let authStatus = true;
    if (!authentications.length) authStatus = false;
    authentications.map((auth) => {
      if (Object.values(auth.records).filter(Boolean).length < 2)
        authStatus = false;
    });
    return authStatus;
  };

  const mainTableArgs: TableProps = {
    columns: [
      {
        title: 'Domain',
        dataIndex: 'domain',
        key: 'domain',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IDomain>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render: ({ record }: ITableRenderProps<IDomain>) => {
          return (
            <p className="text-gray-500 text-sm grid grid-cols-2 gap-x-2  max-w-[7rem] ">
              <span className="mt-0.5">
                {record.isActive ? 'Enabled' : 'Disabled'}
              </span>
              <Toggle
                checked={record.isActive}
                onChange={(status) =>
                  updateDomainSettting(
                    {
                      isActive: status,
                    },
                    record._id,
                  )
                }
              />
            </p>
          );
        },
      },
      {
        title: 'Group',
        dataIndex: 'group',
        key: 'group',
        render: ({ record }: ITableRenderProps<IDomain>) => {
          return <>{record?.group?.name || 'NA'}</>;
        },
      },
      {
        title: 'Verification',
        dataIndex: 'isVerified',
        key: 'isVerified',
        render: ({ record }: ITableRenderProps<IDomain>) => {
          return (
            <div>
              <div className="flex space-x-2 items-center">
                {record.isVerified ? (
                  <BadgeCheckIcon className="h-5 w-5 text-primary" />
                ) : (
                  <XCircleIcon className="h-7 w-5 text-secondary" />
                )}
                <p
                  className={`cursor-pointer ${
                    record.isVerified ? 'text-primary-600' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setDomainId(record._id);
                    setDomainModalVisibility(true);
                  }}
                >
                  {record.isVerified ? 'Verified' : 'Verify Domain'}
                </p>
              </div>
            </div>
          );
        },
      },
      {
        title: 'Authentication',
        dataIndex: 'actions',
        key: 'actions',
        render: ({ record }: ITableRenderProps<IDomain>) => {
          const authStatus = checkAuthentication(record.authentication || []);
          return (
            <p
              className={`inline-block cursor-pointer ${
                authStatus ? 'text-primary' : 'text-secondary'
              } ${!record.group?.name && 'cursor-not-allowed opacity-75 '}`}
              onClick={() => {
                if (!record.group?.name) return; //fixme
                setDomainId(record._id);
                setDomainModalVisibility(true);
              }}
            >
              {authStatus ? 'Authenticated' : 'Not Authenticated'}
            </p>
          );
        },
      },
      {
        title: 'Notes',
        dataIndex: 'comments',
        key: 'comments',
        tooltip: true,
        render: ({ text }: ITableRenderProps<IDomain>) => {
          return <>{text || 'NA'}</>;
        },
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: ({ record }: ITableRenderProps<IDomain>) => {
          return (
            <div className="flex space-x-3 items-center">
              <PencilAltIcon
                className="w-5 h-5 text-primary cursor-pointer"
                onClick={() => {
                  setDomainId(record._id);
                  setDomainModalVisibility(true);
                }}
              />
              <span>|</span>
              <Popconfirm
                title="Are you sure you want to delete this domain?"
                iconType="warning"
                onConfirm={() => handleDelete(record?._id)}
              >
                <TrashIcon className="w-5 h-5 text-primary cursor-pointer" />
              </Popconfirm>
            </div>
          );
        },
      },
    ],
    dataSource: domainsData(domains),
  };

  return (
    <div className="w-full space-y-3">
      <PageHeader
        title="Domain Settings"
        description="Add your domains and verify TXT record on name server to start sending emails"
      />

      <div>
        <Button
          loading={isLoading}
          onClick={() => {
            setDomainId('');
            setDomainModalVisibility(true);
          }}
        >
          Add Domain
        </Button>
      </div>
      <Table {...mainTableArgs} loading={isLoading} />
      <Modal
        visible={domainModalVisibility}
        setVisible={setDomainModalVisibility}
        title={`Domain`}
        widthClass="max-w-4xl"
        footer={false}
        centered
        onClose={getListDomains}
        onCancel={() => setDomainModalVisibility(false)}
      >
        <AddUpdateDomain
          domainId={domainId}
          updateDomainId={(id) => setDomainId(id)}
          closeModal={() => {
            getListDomains();
            setDomainModalVisibility(false);
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
