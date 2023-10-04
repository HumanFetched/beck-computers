import React, { useEffect, useState } from 'react';
import { Loader, Select } from '../../components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAppDispatch } from '../../state';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';
import { SECONDARY_COLOR, statusBorderColor } from '../../utils/constants';
import { capitalize, sum } from 'lodash';
import { IStatusTraffic } from '../../types/traffic';
import moment from 'moment';
import { getDate } from '../../utils/helper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

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

const DeliverabilityGraph = () => {
  const dispatch = useAppDispatch();
  const [overallTraffic, setOverallTraffic] =
    useState<IStatusTraffic>(defaultData);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedDuration, setSelectedDuration] = useState('1M');

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

  const getLineGraphData = () => {
    return {
      labels:
        overallTraffic?.delivered?.date?.map((d: string) =>
          moment(d).format('YY-MM-DD'),
        ) || [],
      datasets: Object.keys(overallTraffic).map((item) => {
        return {
          label: capitalize(item),
          data: overallTraffic[item as keyof IStatusTraffic]?.count,
          borderColor: statusBorderColor[item as string],
        };
      }),
    };
  };

  const getDeliverability = () => {
    const parentage = (
      (sum(overallTraffic?.delivered?.count) /
        sum([
          ...(overallTraffic?.delivered?.count || []),
          ...(overallTraffic?.bounce?.count || []),
          ...(overallTraffic?.failed?.count || []),
        ])) *
      100
    ).toFixed(1);
    return parentage !== 'NaN' ? parentage : 0;
  };

  return (
    <div className="p-3 border flex flex-col items-start w-full">
      <div className="w-full flex justify-between items-center mb-5">
        <h3 className="font-semibold md:text-lg text-md">Deliverability</h3>
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
          <Line data={getLineGraphData()} />
        </Loader>
      </div>
      <div className="w-full flex justify-end items-center space-x-10">
        <div className="flex flex-col">
          <h3 className="text-secondary font-bold text-xl md:text-2xl">
            {sum(overallTraffic?.delivered?.count)}
          </h3>
          <p className="font-bold text-lg md:text-xl text-gray-700">
            Delivered
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-secondary font-bold text-xl md:text-2xl">
            {sum([
              ...(overallTraffic?.delivered?.count || []),
              ...(overallTraffic?.bounce?.count || []),
              ...(overallTraffic?.failed?.count || []),
            ])}
          </h3>
          <p className="font-bold text-lg md:text-xl text-gray-700">Sent</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-secondary font-bold text-xl md:text-2xl">
            {getDeliverability()}%
          </h3>
          <p className="font-bold text-lg md:text-xl text-gray-700">
            Deliverability
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverabilityGraph;
