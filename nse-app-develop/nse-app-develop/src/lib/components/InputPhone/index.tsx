import React from 'react';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

/* eslint-disable-next-line */
export interface InputPhoneProps extends PhoneInputProps {
  label?: string;
  name?: string;
}

export const InputPhone: React.FC<InputPhoneProps> = ({
  label = '',
  name = '',
  country = 'in',
  value,
  inputProps,
  autoFormat,
  disabled,
  disableDropdown,
  disableCountryCode,
  placeholder,
  enableAreaCodes,
  enableSearch,
  disableSearchIcon,
  onChange = () => null,
}) => {
  return (
    <>
      {label && (
        <div className="flex justify-start">
          {label && (
            <label
              htmlFor={name}
              className={`block text-sm font-normal text-gray-700`}
            >
              {label}
            </label>
          )}
        </div>
      )}
      <div className="mt-1">
        <PhoneInput
          placeholder={placeholder}
          country={country}
          value={value}
          inputProps={inputProps}
          autoFormat={autoFormat}
          disabled={disabled}
          disableDropdown={disableDropdown}
          disableCountryCode={disableCountryCode}
          enableAreaCodes={enableAreaCodes}
          enableSearch={enableSearch}
          disableSearchIcon={disableSearchIcon}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputPhone;
