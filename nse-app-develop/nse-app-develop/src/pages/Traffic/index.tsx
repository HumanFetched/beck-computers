import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Button, PageHeader } from '../../lib/components';
import AdvanceFilters from '../../lib/containers/AdvanceFilters/index';
import EmailReportsTable from '../../lib/containers/EmailReportsTable';
import SearchTraffic from '../../lib/containers/SearchTraffic';
import { nseApi } from '../../lib/services';
import {
  emailReportActions,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import { IFilter } from '../../lib/types';
import ExportReportModal from '../../lib/containers/ExportReportModal/ExportReportModal';

export interface IDuration {
  fromDuration: string;
  toDuration: string;
}

export const defaultFilter = {
  dateRange: '',
  fromDuration: '',
  toDuration: '',
  domain: '',
  sender: '',
  toDomain: '',
  recipient: '',
  group: '',
  status: '',
  hasAttachment: false,
};

export const Traffic = () => {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector((state) => state.emailReports);

  const navigate = useNavigate();

  const [filter, setFilter] = useState<IFilter>(defaultFilter);
  const [search, setSearch] = useState('');
  const [isAdvanceFilterVisible, setIsAdvanceFilterVisible] = useState(false);

  //listEmailReports
  const listEmailReports = (
    data: { [key: string]: string },
    setSubmitting?: (isSubmitting: boolean) => void,
  ) => {
    dispatch(
      nseApi.endpoints.listEmailReports.initiate({
        page: 1,
        limit,
        fields:
          'domain,sender,recipient,subject,status,error,updatedAt,isNotified',
        ...(data && {
          filter: {
            [data.field]: data.value,
          },
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
      })
      .finally(() => {
        if (setSubmitting) setSubmitting(false);
        navigate({ search: '?page=1' });
      });
  };

  //reset email reports list
  useEffect(() => {
    return () => {
      dispatch(emailReportActions.reset());
    };
  }, []);

  const handleResetFilters = () => {
    setSearch('');
    setFilter(defaultFilter);
    listEmailReports({});
  };

  return (
    <div className="space-y-8">
      <PageHeader title="SMTP Traffic" />
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-2">
          <SearchTraffic
            type="emailReports"
            search={search}
            setSearch={(val) => {
              setSearch(val);
              setFilter(defaultFilter);
              setIsAdvanceFilterVisible(false);
            }}
            setIsAdvanceFilterVisibility={() =>
              setIsAdvanceFilterVisible(!isAdvanceFilterVisible)
            }
          />
          <Button disabled={!search} onClick={handleResetFilters}>
            Reset
          </Button>
        </div>
        <div>
          <ExportReportModal
            type="emailReports"
            search={search}
            filter={filter}
          />
        </div>
      </div>
      <div className="w-full relative">
        <EmailReportsTable filter={filter} search={search} />
        {isAdvanceFilterVisible && (
          <div className="absolute top-0 w-full border-t-4 border-gray-500 bg-white z-50 shadow-md rounded-sm ">
            <AdvanceFilters
              type="emailReports"
              filter={filter}
              setFilter={setFilter}
              setSearch={setSearch}
              updateAdvanceFilterVisibility={() =>
                setIsAdvanceFilterVisible(!isAdvanceFilterVisible)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
