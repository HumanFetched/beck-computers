import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { TextArea } from '../../../components';
import { IUpdateNotificationsSettingsRequestBody } from '../../../types';
import { emailListValidator } from '../../../utils/helper';

const DebounceTextArea = ({
  id,
  value,
  updateField,
  callback,
}: {
  id: string;
  value: string;
  updateField: string;
  callback: (id: string, data: IUpdateNotificationsSettingsRequestBody) => void;
}) => {
  //localState
  const [localValue, setLocalValue] = useState(value);

  const notInitialRender = useRef(false);
  useEffect(() => {
    let timeId: string | number | NodeJS.Timeout | undefined;
    if (notInitialRender.current) {
      timeId = setTimeout(() => {
        if (updateField === 'notifyEmails') {
          const emails = localValue.replaceAll('\n', '');
          if (!emails) {
            toast.error(`minimum one email id required use ',' to separate `);
            return;
          }
          if (!emailListValidator(emails)) {
            toast.error(`Please add valid email id`);
            return;
          }
          callback(id, {
            [updateField]: emails?.split(','),
          });
        } else {
          callback(id, {
            [updateField]: localValue,
          });
        }
      }, 2500);
    } else {
      notInitialRender.current = true;
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [localValue]);

  return (
    <TextArea
      value={localValue}
      marker={updateField}
      size={'small'}
      maxLength={100}
      className={`h-10 overflow-hidden`}
      onChange={(_marker, _value) => {
        setLocalValue(_value);
      }}
    />
  );
};

export default DebounceTextArea;
