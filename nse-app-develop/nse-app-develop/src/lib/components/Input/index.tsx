import React, { FormEvent, useState, useEffect, ReactNode } from 'react';
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { MEDIA_CDN_PREFIX } from '../../utils/constants';
/* eslint-disable-next-line */

export type InputSizeType = 'small' | 'default' | 'large';
export type IInputTypes =
  | 'email'
  | 'text'
  | 'color'
  | 'tel'
  | 'password'
  | 'datetime-local';

export interface InputProps {
  size?: InputSizeType;
  placeholder?: string;
  value: string | undefined;
  type?: IInputTypes;
  name?: string;
  id?: string;
  marker: string;
  label?: string;
  className?: string;
  description?: string;
  errorMessage?: string;
  hint?: string;
  addonBefore?: string;
  addonAfter?: ReactNode;
  rounded?: boolean;
  disabled?: boolean;
  maxLength?: number;
  showCount?: boolean;
  readonly?: boolean;
  autoFocus?: boolean;
  autoComplete?: boolean;
  autoCorrect?: boolean;
  isPasswordVisibility?: boolean;
  required?: boolean;
  isChecked?: boolean;
  allowClear?: boolean;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  trailingIcon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  onChange?: (
    marker: string,
    value: string,
    event: FormEvent<HTMLInputElement>,
  ) => void;
  onBlur?: (
    marker: string,
    value: string,
    event: FormEvent<HTMLInputElement>,
  ) => void;
  onPressEnter?: (
    marker: string,
    value: string,
    event: FormEvent<HTMLInputElement>,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  handleClear?: () => void;
}

const getInputSize = (size: InputSizeType): string => {
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

export const Input: React.FC<InputProps> = (props) => {
  const {
    size = 'default',
    placeholder = '',
    value = '',
    type = 'text',
    name = '',
    id = '',
    marker = '',
    label = '',
    className = '',
    description = '',
    errorMessage,
    hint = '',
    addonBefore,
    rounded,
    addonAfter,
    disabled,
    maxLength,
    showCount = false,
    readonly = false,
    autoFocus = false,
    autoComplete = false,
    autoCorrect = false,
    isPasswordVisibility = false,
    required = false,
    isChecked = false,
    allowClear = false,
    onChange = () => null,
    onBlur = () => null,
    onPressEnter = () => null,
    onClick = () => null,
    handleClear = () => null,
  } = props;

  const [textCount, setTextCount] = useState(value.length);
  const [showPaassword, setShowPaassword] = useState<boolean>(false);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    // check character count
    if (maxLength && value.length > maxLength) return;

    setTextCount(value.length);
    onChange(marker, value, event);
  };

  const handlePaasswordVisibility = (status: boolean) => {
    setShowPaassword(status);
  };

  const getHeaderClasses = (
    text_1: string | boolean,
    text_2: string | boolean,
  ): string => {
    if (text_1 && text_2) return `flex justify-between`;
    else if (text_1) return `flex justify-start`;
    else if (text_2) return `flex justify-end`;
    return `flex justify-between`;
  };

  const getFormattedValue = (value: string, maxLength?: number) => {
    let tempValue = value;
    if (maxLength && value.length > maxLength) {
      tempValue = value.slice(0, maxLength);
    }
    return tempValue;
  };

  useEffect(() => {
    setTextCount(getFormattedValue(value, maxLength).length);
    return () => {
      setTextCount(0);
    };
  }, [value, maxLength]);

  return (
    <>
      {(label || hint) && (
        <div className={getHeaderClasses(label, hint)}>
          {label && (
            <label
              htmlFor={name}
              className={`${
                isChecked ? 'flex' : 'block'
              } text-sm font-medium text-gray-700 ${className}`}
            >
              {label}
              {required && <span className={`text-red-500 ml-1`}>*</span>}
              {isChecked && (
                <img
                  className="ml-1"
                  src={`${MEDIA_CDN_PREFIX}/images/icons/check_circle.svg`}
                  alt=""
                />
              )}
            </label>
          )}
          {hint && (
            <span className="text-sm text-gray-500" id="email-optional">
              {hint}
            </span>
          )}
        </div>
      )}

      <div
        className={`relative ${label ? 'mt-1' : ''} rounded-md shadow-sm ${
          addonBefore && 'flex'
        } ${
          (errorMessage || props.icon || isPasswordVisibility) && 'relative'
        } ${disabled && 'opacity-50 select-none cursor-not-allowed'} w-full `}
      >
        {props.icon && !addonBefore && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <props.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
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
          type={
            type === 'password' && showPaassword && isPasswordVisibility
              ? 'text'
              : type
          }
          name={name}
          id={id}
          required={required}
          value={getFormattedValue(value, maxLength)}
          maxLength={maxLength}
          readOnly={readonly}
          autoFocus={autoFocus}
          autoComplete={autoComplete ? 'on' : 'off'}
          autoCorrect={autoCorrect ? 'on' : 'off'}
          disabled={disabled}
          className={`shadow-sm block truncate w-full sm:text-sm border-gray-300 ${
            addonBefore ? 'rounded-none' : 'rounded-md'
          } ${
            errorMessage &&
            'pr-10 border-red-300 text-red-900 placeholder-red-300'
          } ${props.icon && !props.addonBefore && 'pl-10'} ${
            props.trailingIcon && 'pr-10'
          } ${rounded && 'rounded-full'} ${getInputSize(size)} outline-none ${
            disabled && 'cursor-not-allowed'
          } ${className}`}
          placeholder={placeholder}
          onChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e)}
          onBlur={(e: FormEvent<HTMLInputElement>) =>
            onBlur(marker, e.currentTarget.value, e)
          }
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              onPressEnter(marker, e.currentTarget.value, e);
            }
          }}
          onClick={(e) => onClick(e)}
        />

        {allowClear && (
          <span
            className="absolute right-1 transform top-1/2 -translate-y-1/2  flex items-center bg-white  cursor-pointer z-20"
            onClick={handleClear}
          >
            <XCircleIcon
              className="h-5 w-5 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
            />
          </span>
        )}

        {type === 'password' && isPasswordVisibility && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-50">
            {showPaassword ? (
              <EyeIcon
                className="h-5 w-5 text-gray-500 cursor-pointer"
                aria-hidden="true"
                onClick={() => handlePaasswordVisibility(!showPaassword)}
              />
            ) : (
              <EyeOffIcon
                className="h-5 w-5 text-gray-500 cursor-pointer"
                aria-hidden="true"
                onClick={() => handlePaasswordVisibility(!showPaassword)}
              />
            )}
          </div>
        )}

        {addonAfter && type !== 'password' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              {addonAfter}
            </span>
          </div>
        )}

        {!addonAfter &&
          (errorMessage || props.trailingIcon) &&
          !isPasswordVisibility && (
            <div
              className={`absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none`}
            >
              {errorMessage && (
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              )}
              {props.trailingIcon && (
                <props.trailingIcon
                  className={`h-5 w-5 text-gray-400`}
                  aria-hidden="true"
                />
              )}
            </div>
          )}
      </div>

      {(description || showCount) && (
        <div className={`relative ${getHeaderClasses(description, showCount)}`}>
          {description && (
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          )}
          {showCount && (
            <p className="absolute mt-1 text-xs text-gray-500">
              {textCount}/{maxLength}
            </p>
          )}
        </div>
      )}

      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
