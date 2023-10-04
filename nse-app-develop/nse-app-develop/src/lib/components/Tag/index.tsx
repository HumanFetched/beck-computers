import React from 'react';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, useState, MouseEvent, useEffect } from 'react';

/* eslint-disable-next-line */

export type TagType = 'default' | 'success' | 'info' | 'warning' | 'error';

export interface TagProps {
  closable?: boolean;
  type?: TagType;
  rounded?: boolean;
  className?: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  onClose?: (e: MouseEvent<HTMLSpanElement>) => void;
}

const getTagTypeClass = (type: TagType) => {
  switch (type) {
    case 'success':
      return `bg-green-100 border border-green-500 text-green-700`;
    case 'info':
      return `bg-blue-100 border border-blue-500 text-blue-700`;
    case 'error':
      return `bg-red-100 border border-red-500 text-red-700`;
    case 'warning':
      return `bg-yellow-100 border border-yellow-500 text-yellow-700`;
    default:
      return `bg-gray-100 border border-gray-300 text-gray-700`;
  }
};

const getIconClass = (type: TagType) => {
  switch (type) {
    case 'success':
      return `text-green-400`;
    case 'info':
      return `text-blue-400`;
    case 'error':
      return `text-red-400`;
    case 'warning':
      return `text-yellow-400`;
    case 'default':
      return `text-gray-400`;
    default:
      return `text-gray-400`;
  }
};

export const Tag: React.FC<TagProps> = (props) => {
  const {
    children,
    type = 'default',
    closable = false,
    rounded = false,
    className = '',
    onClose = () => null,
  } = props;

  const [visibility, setVisibility] = useState<boolean>(true);

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
      <span
        className={`${className} ${getTagTypeClass(type)} ${
          rounded && 'rounded-full'
        } leading-5 inline-flex items-center px-2 text-xs align-middle cursor-pointer`}
      >
        {props.icon && (
          <props.icon
            className={`h-4 w-4 mr-1.5 ${getIconClass(type)}`}
            aria-hidden="true"
          />
        )}
        {children}

        {closable && (
          <span
            className="text-gray-700 inline-block cursor-pointer ml-1.5"
            onClick={(e: MouseEvent<HTMLSpanElement>) => {
              setVisibility(false);
              onClose(e);
            }}
          >
            <XIcon className="h-3 w-3" aria-hidden="true" />
          </span>
        )}
      </span>
    </Transition>
  );
};

export default Tag;
