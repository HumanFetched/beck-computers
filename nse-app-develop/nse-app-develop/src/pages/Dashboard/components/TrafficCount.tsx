import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loader, Select } from '../../../lib/components';
import { nseApi } from '../../../lib/services';
import { useAppDispatch } from '../../../lib/state';
import { ITotalCountResponse } from '../../../lib/types';
import { SECONDARY_COLOR } from '../../../lib/utils/constants';
import { getDate } from '../../../lib/utils/helper';

const defaultData = [
  {
    _id: {
      status: '',
    },
    count: 0,
  },
];

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

const TrafficCount = () => {
  const dispatch = useAppDispatch();

  const [totalCounts, setTotalCounts] = useState(defaultData);
  const [selectedDuration, setSelectedDuration] = useState('7D');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      nseApi.endpoints.getTotalCounts.initiate({
        ...getDate(selectedDuration),
      }),
    )
      .unwrap()
      .then((res) => {
        const response: ITotalCountResponse[] = res.results;
        setTotalCounts(response);
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
  }, [selectedDuration]);

  return (
    <div className="p-3 border max-w-md flex flex-col items-start ">
      <div className="w-full flex justify-between items-center mb-5">
        <h3 className="font-semibold md:text-lg text-md">Total count</h3>
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
      <Loader loading={isLoading} color={SECONDARY_COLOR}>
        <div className="flex flex-wrap  justify-center  mt-3">
          {totalCounts.map((data: ITotalCountResponse, idx) => (
            <div
              key={`stat-${idx}`}
              className="flex flex-col justify-center items-center space-y-1 px-5 py-2"
            >
              <p className="text-secondary font-semibold md:text-2xl text-xl">
                {data.count}
              </p>
              <p className="font-semibold text-xs md:text-sm">
                {data._id.status}
              </p>
            </div>
          ))}
        </div>
      </Loader>
    </div>
  );
};

export default TrafficCount;
