import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../../../components';
import { IUpdateNotificationsSettingsRequestBody } from '../../../types';

const DebounceInput = ({
  id,
  email,
  callback,
}: {
  id: string;
  email: string;
  callback: (id: string, data: IUpdateNotificationsSettingsRequestBody) => void;
}) => {
  //localState
  //   const [domain, setDomain] = useState(email.split('@')[1]);
  const [localEmail, setEmail] = useState(email.split('@')[0]);

  const notInitialRender = useRef(false);
  useEffect(() => {
    let timeId: string | number | NodeJS.Timeout | undefined;
    if (notInitialRender.current) {
      timeId = setTimeout(() => {
        if (!localEmail || localEmail === email.split('@')[0]) {
          setEmail(email.split('@')[0]);
          return;
        }
        callback(id, {
          email: `${localEmail}@${email.split('@')[1]}`,
        });
      }, 2000);
    } else {
      notInitialRender.current = true;
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [localEmail]);

  return (
    <Input
      value={localEmail}
      marker="email"
      onChange={(marker, value) => {
        setEmail(value);
      }}
    />
  );
};

export default DebounceInput;
