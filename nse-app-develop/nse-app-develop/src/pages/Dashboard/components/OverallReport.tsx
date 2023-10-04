import { capitalize } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import { Loader, Select } from '../../../lib/components';
import { nseApi } from '../../../lib/services';
import { useAppDispatch } from '../../../lib/state';
import { IStatusTraffic } from '../../../lib/types/traffic';
import {
  SECONDARY_COLOR,
  statusBorderColor,
} from '../../../lib/utils/constants';
import { getDate } from '../../../lib/utils/helper';

const selectFieldOptions = [
  {
    label: 'Last 7 days',
    value: '7D',
  },
  {
    label: '1 Month',
    value: '1M',
  },
  {
    label: '3 Months',
    value: '3M',
  },
];

const defaultData = {
  failed: {
    date: [],
    count: [],
  },
  bounce: {
    date: [],
    count: [],
  },
  delivered: {
    date: [],
    count: [],
  },
};

export const OverallReport = () => {
  const dispatch = useAppDispatch();

  const [overallTraffic, setOverallTraffic] =
    useState<IStatusTraffic>(defaultData);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedDuration, setSelectedDuration] = useState('7D');
  const listStatusTraffic = () => {
    setIsLoading(true);
    dispatch(
      nseApi.endpoints.listTraffic.initiate({
        ...getDate(selectedDuration),
      }),
    )
      .unwrap()
      .then((res) => {
        setOverallTraffic(res?.results);
      })
      .catch((err) => {
        toast(
          err.data?.message ||
            'Something went wrong. Please try after some time',
          {
            type: 'error',
          },
        );
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    listStatusTraffic();
  }, [selectedDuration]);

  const getStackBarGraphData = () => {
    return {
      labels:
        overallTraffic?.delivered?.date?.map((d: string) =>
          moment(d).format('YY-MM-DD'),
        ) || [],
      datasets: Object.keys(overallTraffic).map((item) => {
        return {
          label: capitalize(item),
          data: overallTraffic[item as keyof IStatusTraffic]?.count,
          backgroundColor: statusBorderColor[item as string],
        };
      }),
    };
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <div className="p-3 border flex flex-col items-start w-full">
      <div className="w-full flex justify-between items-center mb-5">
        <h3 className="font-semibold md:text-lg text-md">Overall Reports</h3>
        <div className="">
          <Select
            size="small"
            options={selectFieldOptions}
            value={selectedDuration}
            onChange={(marker, { value }) => {
              setSelectedDuration(value);
            }}
          />
        </div>
      </div>
      <div className="w-11/12">
        <Loader loading={isLoading} color={SECONDARY_COLOR}>
          <Bar data={getStackBarGraphData()} options={options} />
        </Loader>
      </div>
    </div>
  );
};
