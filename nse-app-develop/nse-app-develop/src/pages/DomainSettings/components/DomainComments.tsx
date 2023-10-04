import React, { useEffect, useRef, useState } from 'react';
import { TextArea } from '../../../lib/components';
import { nseApi } from '../../../lib/services';
import { useAppDispatch } from '../../../lib/state';

const DomainComments = ({ id, comments }: { id: string; comments: string }) => {
  const dispatch = useAppDispatch();

  //localStatte
  const [localComments, setLocalComments] = useState(comments);

  const updateDomainSetting = async () => {
    dispatch(
      nseApi.endpoints.updateDomain.initiate({
        id,
        body: {
          comments: localComments,
        },
      }),
    );
  };

  const notInitialRender = useRef(false);
  useEffect(() => {
    let timeId: string | number | NodeJS.Timeout | undefined;
    if (notInitialRender.current) {
      timeId = setTimeout(() => {
        updateDomainSetting();
      }, 1500);
    } else {
      notInitialRender.current = true;
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [localComments]);

  return (
    <TextArea
      marker=""
      id={`${id}-textarea`}
      value={localComments || ''}
      size={'small'}
      maxLength={100}
      className={`h-10 overflow-hidden`}
      onChange={(_marker, _value) => {
        setLocalComments(_value);
      }}
    />
  );
};

export default DomainComments;
