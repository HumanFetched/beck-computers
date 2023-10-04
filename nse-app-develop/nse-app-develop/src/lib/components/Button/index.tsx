import { Transition } from '@headlessui/react';
import React, { Fragment, MouseEvent } from 'react';

/* eslint-disable-next-line */
export type ButtonSizeType = 'small' | 'default' | 'large';
export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonHtmlType = 'button' | 'reset' | 'submit';

export interface ButtonProps {
  size?: ButtonSizeType;
  rounded?: boolean;
  type?: ButtonType;
  disabled?: boolean;
  children?: string | React.ReactChild | React.ReactChild[];
  loading?: boolean;
  htmlType?: ButtonHtmlType;
  className?: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  block?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const getButtonSize = (size: ButtonSizeType): string => {
  switch (size) {
    case 'small':
      return `px-2.5 py-1.5 rounded text-xs`;
    case 'default':
      return `px-4 py-2 rounded-md text-sm`;
    case 'large':
      return `px-6 py-3 rounded-md text-base`;
    default:
      return `px-4 py-2 rounded-md text-sm`;
  }
};

const getButtonType = (type: ButtonType): string => {
  switch (type) {
    case 'primary':
      return `bg-primary-600 hover:bg-primary-700 text-white border-transparent`;
    case 'secondary':
      return `bg-primary-50 hover:bg-primary-100 text-primary-600 border border-primary-500`;
    case 'ghost':
      return `bg-white hover:bg-gray-100 text-gray-700 border-gray-300`;
    case 'text':
      return `bg-white hover:opacity-80 border-transparent shadow-none `;
    default:
      return `bg-primary-700 hover:bg-primary-800 text-white border-transparent`;
  }
};

const getLoadingIconSize = (size: ButtonSizeType): string => {
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

const getLoadingIconColor = (type: ButtonType): string => {
  switch (type) {
    case 'primary':
      return `text-white`;
    case 'secondary':
      return `text-primary-700`;
    case 'ghost':
      return `text-primary-700`;
    default:
      return `text-white`;
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  size = 'default',
  rounded = false,
  type = 'primary',
  disabled = false,
  loading = false,
  htmlType = 'button',
  block = false,
  icon: Icon,
  onClick = () => null,
}) => {
  return (
    <button
      type={htmlType}
      className={`inline-flex items-center ${getButtonSize(
        size,
      )} border font-medium ${
        rounded ? 'rounded-full' : ''
      } shadow-sm ${getButtonType(type)} ${
        disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${block && 'w-full justify-center'} ${className}`}
      disabled={disabled || loading}
      onClick={(e: MouseEvent<HTMLButtonElement>) => onClick(e)}
    >
      {loading && (
        <Transition
          show={loading}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <svg
            className={`animate-spin -ml-1 mr-3 ${getLoadingIconSize(
              size,
            )} ${getLoadingIconColor(type)}`}
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
        </Transition>
      )}
      {Icon && <Icon className={`mr-1 ${getLoadingIconSize(size)}`} />}
      <div className="truncate mb-0">{children}</div>
    </button>
  );
};

export default Button;
