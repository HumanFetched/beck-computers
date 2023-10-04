/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Button, PageHeader } from '../../lib/components';
import AdvanceFilters from '../../lib/containers/AdvanceFilters';
import ExportReportModal from '../../lib/containers/ExportReportModal/ExportReportModal';
import NotificationsMonitorTable from '../../lib/containers/NotificationsMonitorTable';
import SearchTraffic from '../../lib/containers/SearchTraffic';
import { nseApi } from '../../lib/services';
import {
  notificationsMonitorActions,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import { IFilter } from '../../lib/types';

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

export const NotificationsMonitor = () => {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector((state) => state.emailReports);

  const navigate = useNavigate();

  const [filter, setFilter] = useState<IFilter>(defaultFilter);
  const [search, setSearch] = useState('');
  const [isAdvanceFilterVisible, setIsAdvanceFilterVisible] = useState(false);

  //listNotificationsMonitor
  const listNotificationsMonitor = (
    data: { [key: string]: string },
    setSubmitting?: (isSubmitting: boolean) => void,
  ) => {
    dispatch(
      nseApi.endpoints.listNotificationsMonitor.initiate({
        page: 1,
        limit,
        fields:
          'isNotified,notifiedAt,sender,recipient,subject,notificationFrom,notificationTo,status,group,bounceDetailShort,bounceDetailLong',
        ...(data && {
          filter: {
            [data.field]: data.value,
            status: 'BOUNCE|DROPPED|FAILED|SPAM',
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

  const handleResetFilters = () => {
    setSearch('');
    setFilter(defaultFilter);
    listNotificationsMonitor({});
  };

  //reset notification events list
  useEffect(() => {
    return () => {
      dispatch(notificationsMonitorActions.reset());
    };
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader title="Notification Events" />
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-2">
          <SearchTraffic
            type="notificationReports"
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
            type="notificationReports"
            search={search}
            filter={filter}
          />
        </div>
      </div>
      <div className="w-full relative">
        <NotificationsMonitorTable filter={filter} search={search} />
        {isAdvanceFilterVisible && (
          <div className="absolute top-0 w-full border-t-4 border-gray-500 bg-white z-50 shadow-md rounded-sm ">
            <AdvanceFilters
              type="notificationReports"
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
