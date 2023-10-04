import React, { FormEvent, useState, useEffect, useRef } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { MEDIA_CDN_PREFIX } from '../../utils/constants';
/* eslint-disable-next-line */

export type TextAreaSizeType = 'small' | 'default' | 'large';
export type ITextAreaTypes = 'email' | 'text' | 'color' | 'tel' | 'password';

export interface TextAreaProps {
  size?: TextAreaSizeType;
  placeholder?: string;
  value: string | undefined;
  name?: string;
  id?: string;
  marker: string;
  rows?: number;
  cols?: number;
  label?: string;
  className?: string;
  description?: string;
  errorMessage?: string;
  hint?: string;
  addonBefore?: string;
  addonAfter?: string;
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
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  trailingIcon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  onChange?: (
    marker: string,
    value: string,
    event: FormEvent<HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    marker: string,
    value: string,
    event: FormEvent<HTMLTextAreaElement>,
  ) => void;
  onPressEnter?: (
    marker: string,
    value: string,
    event: FormEvent<HTMLTextAreaElement>,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}

const getInputSize = (size: TextAreaSizeType): string => {
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

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    size = 'default',
    placeholder = '',
    value = '',
    name = '',
    id = '',
    marker = '',
    rows = 0,
    cols = 10,
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
    onChange = () => null,
    onBlur = () => null,
    onPressEnter = () => null,
    onClick = () => null,
  } = props;

  const [textCount, setTextCount] = useState(value.length);

  const currentTextArea = useRef(null);

  const handleInputChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;

    // check character count
    if (maxLength && value.length > maxLength) return;

    setTextCount(value.length);
    onChange(marker, value, event);
    if (!rows) {
      textAreaAutoSize();
    }
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

  const textAreaAutoSize = () => {
    if (!currentTextArea.current) return;
    const textArea = currentTextArea.current as HTMLElement;
    setTimeout(() => {
      textArea.style.cssText = `height: ${textArea.scrollHeight}px`;
    }, 0);
  };

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
        className={`${label ? 'mt-1' : ''} rounded-md shadow-sm ${
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

        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          required={required}
          value={getFormattedValue(value, maxLength)}
          maxLength={maxLength}
          readOnly={readonly}
          autoFocus={autoFocus}
          autoComplete={autoComplete ? 'on' : 'off'}
          autoCorrect={autoCorrect ? 'on' : 'off'}
          disabled={disabled}
          className={`shadow-sm block w-full sm:text-sm border-gray-300 ${
            addonBefore ? 'rounded-none' : 'rounded-md'
          } ${
            errorMessage &&
            'pr-10 border-red-300 text-red-900 placeholder-red-300'
          } ${props.icon && !props.addonBefore && 'pl-10'} ${
            props.trailingIcon && 'pr-10'
          } ${rounded && 'rounded-full'} ${getInputSize(size)} outline-none ${
            disabled && 'cursor-not-allowed'
          } ${className} min-h-[56px] overflow-y-auto ${
            !rows && 'max-h-[5rem]'
          }`}
          placeholder={placeholder}
          onChange={(e: FormEvent<HTMLTextAreaElement>) => handleInputChange(e)}
          onBlur={(e: FormEvent<HTMLTextAreaElement>) => {
            onBlur(marker, e.currentTarget.value, e);
            if (!rows) {
              const textArea =
                currentTextArea.current as unknown as HTMLElement;
              textArea.style.cssText = `height: auto, padding: 0`;
            }
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              onPressEnter(marker, e.currentTarget.value, e);
            }
          }}
          ref={currentTextArea}
          onMouseOver={() => {
            if (!rows) {
              textAreaAutoSize();
            }
          }}
          onMouseLeave={() => {
            if (!rows) {
              const textArea =
                currentTextArea.current as unknown as HTMLElement;
              if (document?.activeElement === textArea) return;
              textArea.style.cssText = `height: auto, padding: 0`;
            }
          }}
          onClick={(e) => onClick(e)}
        />

        {addonAfter && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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

export default TextArea;
