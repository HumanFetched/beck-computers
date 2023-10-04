import { PlusIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, PageHeader, Select } from '../../lib/components';
import { nseApi } from '../../lib/services';
import {
  domainSelector,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import { IDomain } from '../../lib/types';

const SmtpGroup = () => {
  // Redux
  const dispatch = useAppDispatch();
  const domains = useAppSelector((state) => domainSelector.selectAll(state));

  // States
  const [domainFieldValue, setDomainFieldValue] = useState('');
  const getListDomains = () => {
    dispatch(
      nseApi.endpoints.listDomains.initiate({
        page: 1,
        limit: 10,
      }),
    )
      .unwrap()
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong', {
          type: 'error',
        });
      });
  };

  const getDomainOptions = (domains: IDomain[]) => {
    return domains.map((item) => {
      return {
        label: item.domain || '',
        value: item._id,
      };
    });
  };

  useEffect(() => {
    getListDomains();
  }, []);

  return (
    <div className="w-full">
      <PageHeader
        title="SMTP Groups"
        description="configure and view SMTP group and routing logic for each of your verified domains."
      />
      <div className="flex items-center space-x-2 mb-10">
        <p className="font-medium">Select domain</p>
        <div className="w-96">
          <Select
            marker="domains"
            placeholder="Select your domain"
            value={domainFieldValue}
            options={getDomainOptions(domains)}
            onChange={(_, data) => {
              setDomainFieldValue(data.value);
            }}
          />
        </div>
      </div>
      <div>
        No SMTP group has been created for this domain. Add atleast 2 SMTP
        providers to your group to start sending emails
      </div>
      <div className="w-full text-center mt-5">
        <Button icon={PlusIcon}>Add smtp group</Button>
      </div>
    </div>
  );
};

export default SmtpGroup;
