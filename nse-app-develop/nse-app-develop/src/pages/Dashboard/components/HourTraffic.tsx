import { ArcElement, Chart } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../../../lib/components';
import { nseApi } from '../../../lib/services';
import { useAppDispatch } from '../../../lib/state';
import { IHourlyMails } from '../../../lib/types';
Chart.register(ArcElement);

const HourTraffic = () => {
  const dispatch = useAppDispatch();
  const [hourlyTraffic, setHourlyTraffic] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    const date = new Date();
    dispatch(
      nseApi.endpoints.getHourlyMails.initiate({
        fromDuration: new Date(date.getTime() - 1000 * 60 * 60).toISOString(),
        toDuration: date?.toISOString(),
      }),
    )
      .unwrap()
      .then((res) => {
        const response: IHourlyMails = res.results[0];
        setHourlyTraffic(response?.hourlyMailsSent || 0);
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

  const getHourlyTrafficGraphData = () => {
    if (hourlyTraffic >= 100) return 180;
    return hourlyTraffic * 1.8;
  };

  return (
    <div className="p-3 border max-w-md flex flex-col items-start">
      <h3 className="font-semibold md:text-lg text-md">Emails sent per hour</h3>
      {true && (
        <Loader loading={isLoading}>
          <div className="flex flex-col justify-end items-end">
            <div className="relative w-96  h-[12rem] overflow-hidden p-3 flex items-center justify-center">
              <div className="z-30 mt-56 relative h-[22rem]  aspect-square bg-[#59f9c84a] rounded-full flex justify-center items-center">
                <div className="z-50  h-[16rem] aspect-square bg-white rounded-full flex items-start justify-center">
                  <p className=" text-4xl mt-10 text-secondary">
                    {hourlyTraffic}
                  </p>
                </div>
                <div
                  className="absolute rounded-full h-full w-full z-40 bg-transparent"
                  style={{
                    transform: `rotate(${getHourlyTrafficGraphData()}deg)`,
                  }}
                >
                  <div
                    className={`z-10 absolute bottom-0 bg-primary w-full h-1/2 transform`}
                    style={{
                      borderRadius: '0% 0% 12rem 12rem',
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="px-6 w-96 text-gray-600 text-lg flex justify-between">
              <p className="ml-2">0</p>
              <p>100</p>
            </div>
          </div>
        </Loader>
      )}
    </div>
  );
};

export default HourTraffic;
