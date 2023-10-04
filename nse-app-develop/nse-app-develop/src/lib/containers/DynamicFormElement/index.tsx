import React, { FormEvent } from 'react';
import { Input, InputNumber } from '../../components';

/* eslint-disable-next-line */
export interface IDynamicFormChangeEvent {
  marker: string;
  value: string | number;
  event: FormEvent<HTMLInputElement>;
}

export interface DynamicFormElementProps {
  name: string;
  type: 'text' | 'number';
  elementKey: string;
  disabled?: boolean;
  value?: string;
  errorMessage?: string;
  onChange: ({ marker, value, event }: IDynamicFormChangeEvent) => void;
}

export const DynamicFormElement: React.FC<DynamicFormElementProps> = ({
  name,
  type,
  elementKey,
  disabled = false,
  value,
  errorMessage,
  onChange = () => null,
}) => {
  return (
    <>
      {type === 'text' && (
        <div className="space-y-2">
          <Input
            marker={elementKey}
            label={name}
            value={value}
            id={elementKey}
            name={elementKey}
            disabled={disabled}
            errorMessage={errorMessage}
            onChange={(marker, value, event) =>
              onChange({ marker, value, event })
            }
          />
        </div>
      )}
      {type === 'number' && (
        <div className="space-y-2">
          <InputNumber
            marker={elementKey}
            label={name}
            value={value || ''}
            id={elementKey}
            name={elementKey}
            disabled={disabled}
            errorMessage={errorMessage}
            onChange={(marker, value, event) =>
              onChange({ marker, value, event })
            }
          />
        </div>
      )}
    </>
  );
};

export default DynamicFormElement;
