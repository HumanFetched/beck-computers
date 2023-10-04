import {
  CheckCircleIcon,
  LinkIcon,
  RefreshIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { ITableColumn, ITableRenderProps, Table } from '../../components';
import { nseApi } from '../../services';
import { useAppDispatch, useAppSelector } from '../../state';
import { IDomainRecords } from '../../types';

interface IDomain {
  id: string;
  domainName: string;
}

interface IStatus {
  domain: IDomain;
}

const ViewDnsAuths: React.FC<IStatus> = ({ domain }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.domain);

  const [apiRecords, setApiRecords] = useState<IDomainRecords[]>();

  const getDomainRecords = () => {
    dispatch(nseApi.endpoints.verifyDomainRecords.initiate({ id: domain.id }))
      .unwrap()
      .then((res) => setApiRecords(res.results));
  };

  useEffect(() => {
    getDomainRecords();
  }, []);

  const tableColum: ITableColumn[] = [
    {
      title: 'SMTP',
      dataIndex: 'name',
      key: 'name',
      render: ({ record }: ITableRenderProps<IDomainRecords>) => {
        return <p className="">{record.provider}</p>;
      },
    },
    {
      title: 'CNAME status',
      dataIndex: 'CNAME',
      key: 'CNAME',
      render: ({ record }: ITableRenderProps<IDomainRecords>) => {
        return (
          <div>
            {record.records.CNAME ? (
              <div className="flex space-x-2 items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-700" />
                <p className="text-gray-600">Verified</p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <XCircleIcon className="h-7 w-5 text-red-600" />
                <p className="cursor-pointer">Not verified</p>
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: 'MX status',
      dataIndex: 'MX',
      key: 'MX',
      render: ({ record }: ITableRenderProps<IDomainRecords>) => {
        return (
          <div>
            {record.records.MX ? (
              <div className="flex space-x-2 items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-700" />
                <p className="text-gray-600">Verified</p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <XCircleIcon className="h-7 w-5 text-red-600" />
                <p className="cursor-pointer">Not verified</p>
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: 'DKIM status',
      dataIndex: 'DKIM',
      key: 'DKIM',
      render: ({ record }: ITableRenderProps<IDomainRecords>) => {
        return (
          <div>
            {record.records.DKIM ? (
              <div className="flex space-x-2 items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-700" />
                <p className="text-gray-600">Verified</p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <XCircleIcon className="h-7 w-5 text-red-600" />
                <p className="cursor-pointer">Not verified</p>
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: 'SPF status',
      dataIndex: 'SPF',
      key: 'SPF',
      render: ({ record }: ITableRenderProps<IDomainRecords>) => {
        return (
          <div>
            {record.records.SPF ? (
              <div className="flex space-x-2 items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-700" />
                <p className="text-gray-600">Verified</p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <XCircleIcon className="h-7 w-5 text-red-600" />
                <p className="cursor-pointer">Not verified</p>
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: 'DMarc status',
      dataIndex: 'DMarc',
      key: 'DMarc',
      render: ({ record }: ITableRenderProps<IDomainRecords>) => {
        return (
          <div>
            {record.records.DMarc ? (
              <div className="flex space-x-2 items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-700" />
                <p className="text-gray-600">Verified</p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <XCircleIcon className="h-7 w-5 text-red-600" />
                <p className="cursor-pointer">Not verified</p>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="">
        <span className="text-md font-semibold">{`Domain authentication`}</span>
      </div>
      <div className="w-full flex justify-end">
        <div
          className="flex items-center text-secondary cursor-pointer space-x-2"
          onClick={() => {
            getDomainRecords();
          }}
        >
          <RefreshIcon
            className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`}
          />
          <p>Refresh status</p>
        </div>
      </div>
      <div className="mb-2">
        <Table
          loading={isLoading}
          dataSource={apiRecords as IDomainRecords[]}
          columns={tableColum}
        />
      </div>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="space-x-2 cursor-pointer flex items-center text-sm text-secondary mt-3"
      >
        <LinkIcon className="h-4 w-4" />
        <p>Learn how to verify DKIM, SPF and DMarc status</p>
      </a>
    </div>
  );
};

export default ViewDnsAuths;
