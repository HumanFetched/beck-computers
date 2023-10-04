import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import { Loader } from '../../../lib/components';
import { nseApi } from '../../../lib/services';
import { useAppDispatch } from '../../../lib/state';
import { IRejectTypesResponse } from '../../../lib/types';

const defaultValue = {
  labels: [''],
  datasets: [
    {
      data: [0],
      backgroundColor: ['#059669'],
      hoverOffset: 5,
    },
  ],
};

const rejectValues: { [key: string]: string } = {
  mailLimitExceed: 'Mail limit exceed',
  others: 'Others',
};

const RejectTypes = () => {
  const dispatch = useAppDispatch();

  const [rejectType, setRejectType] = useState(defaultValue);
  const [totalRejects, setTotalRejects] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    dispatch(
      nseApi.endpoints.getRejectTypes.initiate({
        fromDuration: '',
        toDuration: '',
      }),
    )
      .unwrap()
      .then((res) => {
        const response: IRejectTypesResponse = res.results[0];
        let count = 0;
        Object.values(response).forEach((data) => {
          if (data?.length) count += data[0]?.count;
        });
        setTotalRejects(count);
        setRejectType({
          labels: [
            ...Object.keys(res.results[0]).map(
              (s) => rejectValues[s as string],
            ),
          ],
          datasets: [
            {
              data: [
                ...Object.values(response).map((data) => data[0]?.count || 0),
              ],
              backgroundColor: ['#059669', '#D92363'],
              hoverOffset: 5,
            },
          ],
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
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="p-3 border max-w-md flex flex-col items-start">
      <h3 className="font-semibold md:text-lg text-md">Rejects by type</h3>
      {rejectType && (
        <Loader loading={isLoading}>
          <div className="flex flex-col justify-end items-end">
            <Doughnut data={rejectType} />
            <p className=" text-sm text-gray-500 ">Total: {totalRejects}</p>
          </div>
        </Loader>
      )}
    </div>
  );
};

export default RejectTypes;
