import React, { useEffect, useRef, useState } from 'react';
import { InputNumber } from '../../../components';
import { IUpdateNotificationsSettingsRequestBody } from '../../../types';

const DebounceInputNumber = ({
  id,
  maxNotifications,
  callback,
}: {
  id: string;
  maxNotifications: number;
  callback: (id: string, data: IUpdateNotificationsSettingsRequestBody) => void;
}) => {
  //localState
  const [localMaxNotifications, setLocalMaxNotifications] =
    useState(maxNotifications);

  const notInitialRender = useRef(false);
  useEffect(() => {
    let timeId: string | number | NodeJS.Timeout | undefined;
    if (notInitialRender.current) {
      timeId = setTimeout(() => {
        callback(id, {
          maxNotifications: localMaxNotifications,
        });
      }, 1500);
    } else {
      notInitialRender.current = true;
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [localMaxNotifications]);

  return (
    <InputNumber
      value={localMaxNotifications}
      marker="maxNotifications"
      min={1}
      max={20}
      onChange={(marker, value) => {
        setLocalMaxNotifications(value);
      }}
    />
  );
};

export default DebounceInputNumber;
