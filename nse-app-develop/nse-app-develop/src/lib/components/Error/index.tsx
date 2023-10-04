import React from 'react';
import error from './error.svg';
import { Link } from 'react-router-dom';
import { Button } from '..';

/* eslint-disable-next-line */
export interface ErrorProps {
  type: string;
  subtitle: string;
}

export const Error: React.FC<ErrorProps> = ({ type, subtitle }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={error} alt="404" width="450" />
        <div className="text-3xl mt-5">{type}</div>
        <div className="text-md text-gray-500 mt-1 mb-5">{subtitle}</div>
        <Link to="/">
          <Button>Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
