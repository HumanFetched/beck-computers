import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Field, FieldProps } from 'formik';
import React, { useRef } from 'react';
import { IInputTypes, Input, InputNumber, Toggle } from '../../components';
import { ICloudStorageFormSchema } from '../../types';

const FormComponent = (props: ICloudStorageFormSchema) => {
  const { label, name, type, isRequired, placeholder } = props;

  const checboxRef = useRef() as React.RefObject<HTMLInputElement>;

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <>
          {type === 'toggle' ? (
            <>
              <Toggle
                label={label}
                checked={field.value}
                onChange={() => {
                  checboxRef?.current?.click();
                }}
                uncheckedChildren={<XIcon className="h-4 w-4" />}
                checkedChildren={<CheckIcon className="h-4 w-4" />}
              />
              <input
                type="checkbox"
                ref={checboxRef}
                {...field}
                className="hidden"
                autoComplete={type}
              />
            </>
          ) : (
            <>
              {type !== 'number' ? (
                <Input
                  label={label}
                  required={isRequired}
                  marker={name}
                  value={field.value}
                  type={type as IInputTypes}
                  name={name}
                  onChange={(_, __, e) => field.onChange(e)}
                  onBlur={(_, __, e) => field.onBlur(e)}
                  placeholder={placeholder}
                  autoComplete={true}
                  errorMessage={meta.touched ? meta.error : ''}
                />
              ) : (
                <InputNumber
                  label={label}
                  marker={name}
                  value={field.value}
                  name={name}
                  onChange={(_, __, e) => field.onChange(e)}
                  onBlur={(_, __, e) => field.onBlur(e)}
                  placeholder={placeholder}
                  autoComplete={true}
                  errorMessage={meta.touched ? meta.error : ''}
                />
              )}
            </>
          )}
        </>
      )}
    </Field>
  );
};

export default FormComponent;
