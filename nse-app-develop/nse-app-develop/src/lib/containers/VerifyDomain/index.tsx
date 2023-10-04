import { LinkIcon, RefreshIcon } from '@heroicons/react/outline';
import React from 'react';
import { toast } from 'react-toastify';
import {
  CopyText,
  ITableColumn,
  ITableRenderProps,
  Table,
} from '../../components';
import { nseApi } from '../../services';
import { domainSelector, useAppDispatch, useAppSelector } from '../../state';
import { IDomain } from '../../types';

/* eslint-disable-next-line */
export interface VerifyDomainProps {
  id: string;
}

export const VerifyDomain: React.FC<VerifyDomainProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const domain = useAppSelector((state) =>
    domainSelector.selectById(state, id),
  );
  const { isLoading: loading } = useAppSelector((state) => state.domain);
  const tableColumns: ITableColumn[] = [
    {
      title: 'Name',
      dataIndex: 'key',
      key: 'key',
      render: ({ text }: ITableRenderProps<IDomain>) => {
        return (
          <CopyText classNames="truncate text-ellipsis" text={text}>
            {text}
          </CopyText>
        );
      },
    },
    {
      title: 'Key',
      dataIndex: 'value',
      key: 'value',
      width: 50,
      render: ({ text }: ITableRenderProps<IDomain>) => {
        return (
          <CopyText classNames="truncate text-ellipsis" text={text}>
            {text}
          </CopyText>
        );
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 10,
      render: ({ text }: ITableRenderProps<IDomain>) => {
        return <p className="mr-5">{text}</p>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: ({ record }: ITableRenderProps<IDomain>) => {
        return (
          <p className="mr-5">{record.isVerified ? 'Verified' : 'Pending'}</p>
        );
      },
    },
  ];

  const verifyDomain = (id: string) => {
    dispatch(
      nseApi.endpoints.verifyDomain.initiate({
        id,
      }),
    )
      .unwrap()
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong', {
          type: 'error',
        });
      });
  };

  return (
    <div className=" w-full">
      <p className="text-md font-semibold  mb-2">{`Domain verification`}</p>

      <div className="flex justify-between">
        <p className="font-normal text-sm">
          Add the following TXT record to your name server{' '}
        </p>
        <div
          className="flex items-center text-secondary cursor-pointer space-x-2"
          onClick={() => verifyDomain(id)}
        >
          <RefreshIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          <p>Reverify status</p>
        </div>
      </div>
      <div className="mb-2">
        <Table
          dataSource={[{ ...domain }]}
          columns={tableColumns}
          loading={loading}
        />
      </div>
      <div className="">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="space-x-2 cursor-pointer flex items-center text-sm text-secondary"
        >
          <LinkIcon className="h-4 w-4" />
          <p>Learn how to verify your domain</p>
        </a>
      </div>
    </div>
  );
};

export default VerifyDomain;
