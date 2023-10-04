import React, { ChangeEvent } from 'react';
import './Radio.module.scss';

const getRadioButtonSize = (size: RadioButtonSize) => {
  switch (size) {
    case 'small':
      return `h-4 w-4`;
    case 'default':
      return `h-5 w-5`;
    case 'large':
      return `h-6 w-6`;
    default:
      return `h-5 w-5`;
  }
};

/* eslint-disable-next-line */
export type RadioButtonSize = 'small' | 'default' | 'large';

export interface IRadioButtonGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioButtonGroupProps {
  name: string;
  value: string;
  options?: IRadioButtonGroupOption[];
  isVertical?: boolean;
  size?: RadioButtonSize;
  onChange?: (value: string) => void;
}

export interface RadioButtonProps {
  name: string;
  label?: string;
  value?: string;
  checked: boolean;
  size?: RadioButtonSize;
  onChange: {
    (e: ChangeEvent<HTMLInputElement>): void;
    <T = string | ChangeEvent<HTMLInputElement>>(
      field: T,
    ): T extends ChangeEvent<HTMLInputElement>
      ? void
      : (e: string | ChangeEvent<HTMLInputElement>) => void;
  };
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  size = 'small',
  name,
  onChange,
}) => {
  return (
    <div className={`relative flex items-start space-x-1.5`}>
      <div className="flex items-center h-5">
        <input
          name={name}
          defaultChecked={checked}
          id={name}
          type="radio"
          value={value}
          className={`peer-checked:bg-none focus:ring-transparent peer-checked:bg:primary focus:ring-offset-0  text-primary-600 border-gray-300 cursor-pointer bg-transparent  ${getRadioButtonSize(
            size,
          )}`}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="text-sm cursor-pointer">
        <label className="font-medium text-gray-700 truncate cursor-pointer select-none">
          {label}
        </label>
      </div>
    </div>
  );
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name = 'RadioButtonGroup',
  value = '',
  options = [],
  isVertical = false,
  size = 'default',
  onChange = () => null,
}) => {
  return (
    <div
      className={`${isVertical ? '' : 'flex flex-wrap items-center space-3'}`}
    >
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className="relative flex items-start space-x-1.5 mr-4"
          >
            <div className="flex items-center h-5">
              <input
                id={`${index}`}
                name={name}
                value={item.value}
                type="radio"
                defaultChecked={value === item.value}
                onChange={(e) => onChange(e.target.value)}
                className={`focus:ring-0 focus:ring-offset-0 text-primary-600 border-gray-300 ${
                  item.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                } ${getRadioButtonSize(size)}`}
                disabled={item.disabled}
              />
            </div>
            <div className="text-sm cursor-pointer">
              <label
                htmlFor={`${index}`}
                className="font-medium text-gray-700 truncate cursor-pointer select-none"
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

export default RadioButtonGroup;
