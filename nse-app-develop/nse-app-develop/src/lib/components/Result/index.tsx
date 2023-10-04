import * as React from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import { empty } from './assets/Empty';
import { Unauthorized } from './assets/Unauthorized';
import { NotFound } from './assets/NotFound';
import { ServerError } from './assets/ServerError';

export type status =
  | 'success'
  | 'info'
  | 'warning'
  | 'empty'
  | '403'
  | '404'
  | '500'
  | 'error';
/* eslint-disable-next-line */
export interface ResultProps {
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  iconClassName?: string;
  status?: status;
  title?: string;
  subTitle?: string;
  extra?: string | React.ReactNode | React.ReactChild | React.ReactChild[];
}

const getResultIcon = (status: status) => {
  switch (status) {
    case 'success':
      return <CheckCircleIcon className="h-24 text-green-500 stroke-current" />;
    case 'info':
      return (
        <InformationCircleIcon className="h-24 text-blue-500 stroke-current" />
      );
    case 'warning':
      return (
        <ExclamationIcon className="h-24 text-yellow-500 stroke-current" />
      );
    case 'error':
      return (
        <ExclamationCircleIcon className="h-24 text-red-500 stroke-current" />
      );
    case 'empty':
      return (
        <div className="flex justify-center h-24 items-center">{empty()}</div>
      );
    case '403':
      return (
        <div className="flex justify-center items-center">{Unauthorized()}</div>
      );
    case '404':
      return (
        <div className="flex justify-center items-center">{NotFound()}</div>
      );
    case '500':
      return (
        <div className="flex justify-center items-center">{ServerError()}</div>
      );
    default:
      return (
        <InformationCircleIcon className="h-24 text-blue-500 stroke-current" />
      );
  }
};

export function Result(props: ResultProps) {
  const {
    iconClassName = '',
    status = 'info',
    title = '',
    subTitle = '',
    extra = '',
  } = props;
  return (
    <div className="h-auto w-auto flex p-3 flex-col items-center justify-center ">
      {props.icon ? (
        <props.icon className={`h-24 ${iconClassName} `} aria-hidden="true" />
      ) : (
        getResultIcon(status)
      )}
      {title && (
        <h1 className="mt-5 text-2xl break-words text-center">{title}</h1>
      )}
      {subTitle && (
        <p className="mt-3 text-md text-gray-500 break-words text-center">
          {subTitle}
        </p>
      )}
      {extra && <div className="flex mt-5">{extra}</div>}
    </div>
  );
}

export default Result;
