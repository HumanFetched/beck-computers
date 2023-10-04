import React, { FormEvent } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export type InputNumberSizeType = 'small' | 'default' | 'large';
export type IInputNumberTypes = 'email' | 'text' | 'color' | 'tel';

export interface InputNumberProps {
  size?: InputNumberSizeType;
  placeholder?: string;
  value: number | string;
  name?: string;
  id?: string;
  marker: string;
  label?: string;
  description?: string;
  errorMessage?: string;
  hint?: string;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  max?: number;
  min?: number;
  step?: number;
  readonly?: boolean;
  addonBefore?: string;
  addonAfter?: string;
  autoFocus?: boolean;
  autoComplete?: boolean;
  onChange?: (
    marker: string,
    value: number,
    event: FormEvent<HTMLInputElement>,
  ) => void;
  onClick?: (event: FormEvent<HTMLInputElement>) => void;
  onPressEnter?: (
    marker: string,
    value: number,
    event: FormEvent<HTMLInputElement>,
  ) => void;
  onBlur?: (
    marker: string,
    value: number,
    event: FormEvent<HTMLInputElement>,
  ) => void;
}

const getInputSize = (size: InputNumberSizeType): string => {
  switch (size) {
    case 'small':
      return `py-1.5`;
    case 'default':
      return `py-2`;
    case 'large':
      return `py-3`;
    default:
      return `py-2`;
  }
};

export const InputNumber: React.FC<InputNumberProps> = (props) => {
  const {
    size = 'default',
    placeholder = '',
    value,
    name = '',
    id = '',
    marker = '',
    label = '',
    description = '',
    errorMessage,
    hint = '',
    rounded,
    disabled,
    className,
    max,
    min,
    step = 1,
    readonly = false,
    addonAfter = '',
    addonBefore = '',
    autoFocus = false,
    autoComplete = false,
    onChange = () => null,
    onPressEnter = () => null,
    onClick = () => null,
    onBlur = () => null,
  } = props;

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const value = parseFloat(event.currentTarget.value);
    // check character count
    if ((max && value > max) || (min && value < min)) return;
    onChange(marker, value, event);
  };

  const handleBlur = (event: FormEvent<HTMLInputElement>) => {
    const value = parseFloat(event.currentTarget.value);
    if ((max && value > max) || (min && value < min)) return;
    onBlur(marker, value, event);
  };

  const getHeaderClasses = (
    text_1: string | boolean,
    text_2: string | boolean,
  ): string => {
    if (text_1 && text_2) return `flex justify-between`;
    else if (label) return `flex justify-start`;
    else if (text_2) return `flex justify-end`;
    return `flex justify-between`;
  };

  const getFormattedValue = (
    value: number | string,
    max?: number,
    min?: number,
  ): number | string => {
    if (max && value > max) {
      return max;
    }
    if (min && value < min) {
      return min;
    }
    return value;
  };

  const handlePressEnter = (e: FormEvent<HTMLInputElement>) => {
    onPressEnter(marker, parseFloat(e.currentTarget.value), e);
  };

  return (
    <div className="w-full">
      <div className={getHeaderClasses(label, hint)}>
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        {hint && (
          <span className="text-sm text-gray-500" id="email-optional">
            {hint}
          </span>
        )}
      </div>

      <div
        className={`${label && `mt-1`} rounded-md shadow-sm ${
          addonBefore && 'flex'
        } ${errorMessage && 'relative'} ${
          disabled && 'opacity-50 select-none pointer-events-none'
        }`}
      >
        {addonBefore && (
          <span
            className={`inline-flex items-center pointer-events-none px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm ${
              errorMessage && 'border-red-300 text-red-900'
            }`}
          >
            {addonBefore}
          </span>
        )}
        <input
          type="number"
          name={name}
          id={id}
          value={getFormattedValue(value, max, min)}
          min={min}
          max={max}
          step={step}
          readOnly={readonly}
          autoFocus={autoFocus}
          autoComplete={autoComplete ? 'on' : 'off'}
          className={`shadow-sm block truncate w-full sm:text-sm border-gray-300 ${
            errorMessage &&
            'pr-10 border-red-300 text-red-900 placeholder-red-300'
          } ${rounded && 'rounded-full'} ${
            addonBefore ? 'rounded-none' : 'rounded-md'
          } ${getInputSize(size)} outline-none ${className}`}
          placeholder={placeholder}
          onClick={(e: FormEvent<HTMLInputElement>) => onClick(e)}
          onBlur={(e: FormEvent<HTMLInputElement>) => handleBlur(e)}
          onChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              handlePressEnter(e);
            }
          }}
        />
        {addonAfter && (
          <div className="absolute inset-y-0 right-5 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              {addonAfter}
            </span>
          </div>
        )}
        {!addonAfter && errorMessage && (
          <div
            className={`absolute inset-y-0 right-4 flex items-center pointer-events-none`}
          >
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      <div className={getHeaderClasses(description, '')}>
        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>

      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputNumber;
