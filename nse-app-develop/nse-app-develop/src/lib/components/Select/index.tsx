import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useState, useEffect, useRef, MouseEvent, ReactNode } from 'react';
import { isEqual } from 'lodash';

/* eslint-disable-next-line */
export type SelectSizeType = 'small' | 'default' | 'large';
export interface ISelectOption {
  label: string;
  value: string;
  avatar?: string;
  secondaryText?: string;
  disabled?: boolean;
  description?: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export interface SelectProps {
  size?: SelectSizeType;
  options: ISelectOption[];
  value: string;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  name?: string;
  marker?: string;
  placeholder?: string;
  extra?: ReactNode;
  required?: boolean;
  errorMessage?: string;
  menuStatus?: boolean;
  onPopupScroll?: (e: MouseEvent<HTMLUListElement>) => void;
  onChange?: (marker: string, value: ISelectOption) => void;
}

const getSelectSize = (size: SelectSizeType): string => {
  switch (size) {
    case 'small':
      return `py-1.5 rounded text-xs`;
    case 'default':
      return `py-2 rounded-md text-sm`;
    case 'large':
      return `py-3 rounded-md text-base`;
    default:
      return `py-2 rounded-md text-sm`;
  }
};

const getValueObject = (value: string, options: ISelectOption[]) => {
  if (!value) return undefined;
  const result = options.find(function (obj) {
    return obj.value === value && !obj.disabled;
  });
  if (result) return result;
  return undefined;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const getLoadingIconSize = (size: SelectSizeType): string => {
  switch (size) {
    case 'small':
      return `w-4`;
    case 'default':
      return `w-5`;
    case 'large':
      return `w-6`;
    default:
      return `w-5`;
  }
};

export const Select: React.FC<SelectProps> = ({
  value,
  size = 'default',
  options = [],
  disabled = false,
  loading,
  label = '',
  name,
  marker = '',
  placeholder = '',
  extra,
  required,
  errorMessage,
  menuStatus = true,
  onPopupScroll = () => null,
  onChange = () => null,
}) => {
  const buttonElement = useRef(null);

  const [selected, setSelected] = useState<ISelectOption>(
    getValueObject(value, options) || options[0],
  );
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [optionsWidth, setOptionsWidth] = useState(50);

  const handleOnChange = (value: ISelectOption): void => {
    if (isEqual(selected.value, value.value)) return;
    setSelected(value);
    onChange(marker, value);
  };

  useEffect(() => {
    if (!buttonElement.current) return;
    const button = buttonElement.current as HTMLElement;
    setOptionsWidth(button.clientWidth);
  }, []);

  useEffect(() => {
    setIsMenuOpen(menuStatus);
  }, [selected]);

  useEffect(() => {
    if (!value && !placeholder) {
      setSelected(options[0]);
      return;
    }
    if (value) {
      setSelected(getValueObject(value, options) || options[0]);
    } else {
      setSelected({ label: placeholder, value: '' });
    }
  }, [value, options]);

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium text-gray-700`}
        >
          {label}
          {required && <span className={`text-red-500 ml-1`}>*</span>}
        </label>
      )}
      <Listbox
        value={selected}
        onChange={handleOnChange}
        disabled={loading || disabled}
      >
        {({ open }) => (
          <div className="mt-1">
            <Listbox.Button
              className={`truncate bg-white relative w-full border border-gray-300 shadow-sm pl-3 pr-10 ${getSelectSize(
                size,
              )} text-left  cursor-pointer ${
                (loading || disabled) && 'opacity-50 cursor-not-allowed'
              }`}
              onClick={() => setIsMenuOpen(true)}
              ref={buttonElement}
            >
              <span className="flex items-center space-x-2">
                {loading && (
                  <svg
                    className={`animate-spin -ml-1 mr-3 ${getLoadingIconSize(
                      size,
                    )} text-primary-600`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {selected?.avatar && (
                  <img
                    src={selected.avatar}
                    alt=""
                    className="flex-shrink-0 w-6 h-6 rounded-full"
                  />
                )}

                {selected?.icon && (
                  <selected.icon
                    className="flex-shrink-0 h-5 w-5 text-primary-300"
                    aria-hidden="true"
                  />
                )}

                <span className={`block truncate`} title={selected?.label}>
                  {selected?.label}
                </span>
                {selected?.secondaryText && (
                  <span className="truncate text-gray-500">
                    {selected.secondaryText}
                  </span>
                )}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open && isMenuOpen}
              as="div"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={`absolute w-full z-50 mt-1 bg-white shadow-lg max-h-64 ${getSelectSize(
                  size,
                )} pb-0 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none slim-scroll`}
                onScroll={(e: MouseEvent<HTMLUListElement>) => onPopupScroll(e)}
                style={{ width: `${optionsWidth}px` }}
              >
                {options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'w-full text-white bg-primary-700'
                          : 'text-gray-900',
                        `select-none relative py-2 pl-3 pr-9 cursor-pointer ${
                          option.disabled
                            ? 'opacity-50 cursor-not-allowed'
                            : 'opacity-100'
                        }`,
                      )
                    }
                    value={option}
                    disabled={option.disabled}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center space-x-2">
                          {option.avatar && (
                            <img
                              src={option.avatar}
                              alt=""
                              className="flex-shrink-0 h-6 w-6 rounded-full"
                            />
                          )}
                          {option.icon && (
                            <option.icon
                              className={classNames(
                                active
                                  ? 'text-primary-100'
                                  : 'text-primary-300',
                                'flex-shrink-0 h-5 w-5',
                              )}
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              `block truncate ${option.avatar && 'ml-3'}`,
                            )}
                          >
                            {option.label}
                          </span>
                          {option.secondaryText && (
                            <span
                              className={classNames(
                                active ? 'text-primary-50' : 'text-gray-500',
                                'truncate',
                              )}
                            >
                              {option.secondaryText}
                            </span>
                          )}
                        </div>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-primary-700',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                        {option.description && (
                          <p
                            className={classNames(
                              active ? 'text-primary-50' : 'text-gray-500',
                              'mt-2 block truncate text-xs',
                            )}
                          >
                            {option.description}
                          </p>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
                {extra && (
                  <li
                    className={
                      'select-none bg-white pb-1 border-t-2 border-gray-100 text-xs pl-3 bottom-0 sticky'
                    }
                  >
                    {extra}
                  </li>
                )}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </>
  );
};

export default Select;
