import * as React from 'react';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, useState, MouseEvent, useEffect } from 'react';

/* eslint-disable-next-line */
export type AlertType = 'default' | 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  title?: string;
  message?: string | React.ReactNode;
  closable?: boolean;
  showIcon?: boolean;
  type?: AlertType;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const getAlertTypeClass = (type: AlertType) => {
  switch (type) {
    case 'success':
      return `bg-green-50 border border-green-500`;
    case 'info':
      return `bg-primary-50`;
    case 'error':
      return `bg-red-50 border border-red-500`;
    case 'warning':
      return `bg-yellow-50 border border-yellow-500`;
    case 'default':
      return `bg-gray-50 border border-gray-500`;
    default:
      return `bg-blue-50 border border-blue-500`;
  }
};

const getIconClass = (type: AlertType) => {
  switch (type) {
    case 'success':
      return `text-green-400`;
    case 'info':
      return `text-primary-400`;
    case 'error':
      return `text-red-400`;
    case 'warning':
      return `text-yellow-400`;
    case 'default':
      return `text-gray-400`;
    default:
      return `text-blue-400`;
  }
};

export const Alert: React.FC<AlertProps> = (props) => {
  const {
    title = '',
    message = '',
    closable = false,
    showIcon = true,
    type = 'info',
    onClose = () => null,
  } = props;

  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    return () => {
      setVisibility(true);
    };
  }, []);

  return (
    <Transition
      show={visibility}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className={`relative rounded-md ${getAlertTypeClass(type)} p-4`}>
        <div className="flex">
          {showIcon && props.icon && (
            <div className="flex-shrink-0">
              <props.icon
                className={`h-5 w-5 ${getIconClass(type)}`}
                aria-hidden="true"
              />
            </div>
          )}
          <div className="ml-3">
            {title && <h3 className="text-sm font-medium">{title}</h3>}
            {message && (
              <div className={`${title && 'mt-2'} text-sm`}>
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
        {closable && (
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="inline-flex text-gray-400"
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                setVisibility(false);
                onClose(e);
              }}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </Transition>
  );
};

export default Alert;
