import React, { ChangeEvent, useState } from 'react';

/* eslint-disable-next-line */
export type CheckboxSize = 'small' | 'default' | 'large' | '2xl';

export interface ICheckboxGroupOption {
  label: string;
  value: string;
}

export interface CheckboxGroupProps {
  name: string;
  defaultValue?: string[];
  options?: ICheckboxGroupOption[];
  isVertical?: boolean;
  size?: CheckboxSize;
  onChange?: (
    value: string[],
    option?: {
      status?: 'checked' | 'unChecked';
      unCheckedValue?: string;
      checkedValue?: string;
    },
  ) => void;
}

const uniq = (array: string[]) => {
  return array.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
};

const getCheckboxSize = (size: CheckboxSize) => {
  switch (size) {
    case 'small':
      return `h-4 w-4`;
    case 'default':
      return `h-5 w-5`;
    case 'large':
      return `h-6 w-6`;
    case '2xl':
      return `h-8 w-8`;
    default:
      return `h-5 w-5`;
  }
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name = 'CheckboxGroup',
  defaultValue = [],
  options = [],
  isVertical = false,
  size = 'default',
  onChange = () => null,
}) => {
  const [checkedValue, setCheckedValue] = useState<string[]>(
    defaultValue || [],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedValue((prevState) => {
        const tempVal = [...prevState, value];
        onChange(uniq(tempVal), {
          status: 'checked',
          checkedValue: value,
        });
        return tempVal;
      });
    } else {
      setCheckedValue(() => {
        const tempVal = checkedValue.filter((val) => val !== value);
        onChange(uniq(tempVal), {
          status: 'unChecked',
          unCheckedValue: value,
        });
        return tempVal;
      });
      // const tempVal = checkedValue.filter((val) => val !== value)
      // onChange(uniq(tempVal))
    }
  };

  return (
    <div className={`${isVertical ? '' : 'flex flex-wrap'}`}>
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className="relative flex items-start space-x-3 mr-4 mb-3 my-4"
          >
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id={`${index}`}
                defaultChecked={defaultValue.includes(item.value)}
                aria-describedby="comments-description"
                name={name}
                value={item.value}
                onChange={(e) => handleChange(e)}
                className={`focus:ring-0 focus:ring-offset-0 text-primary-500 border-gray-300 rounded cursor-pointer ${getCheckboxSize(
                  size,
                )}`}
              />
            </div>
            <div className="text-sm cursor-pointer">
              <label
                htmlFor={`${index}`}
                className="font-medium text-white truncate cursor-pointer select-none"
              >
                {item.label}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  id?: string;
  defaultChecked?: boolean;
  name?: string;
  size?: CheckboxSize;
  onChange?: (status: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = '',
  checked = false,
  id = 'checkbox',
  defaultChecked = false,
  name = 'checkbox',
  size = 'default',
  onChange = () => null,
}) => {
  return (
    <div className="relative flex items-center space-x-1.5 mr-3 ">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id={`${id}`}
          defaultChecked={defaultChecked}
          aria-describedby="comments-description"
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={`focus:ring-primary-500 text-primary-600 border-gray-300 rounded cursor-pointer ${getCheckboxSize(
            size,
          )}`}
        />
      </div>
      <div className="text-sm cursor-pointer">
        <span
          className={`ml-1 max-w-prose  text-sm font-medium text-gray-700 `}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default CheckboxGroup;
