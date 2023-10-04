import { ChevronLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PageHeaderProps {
  title: string;
  description?: string;
  titleSize?: string; // Class name for the font size
  descriptionSize?: string;
  titleClass?: string;
  descriptionClass?: string;
  isBackButton?: boolean;
  extra?: React.ReactNode[];
}

function getExtra(extra: React.ReactNode[]) {
  const actionList = extra.map((action, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={`action-${index}`}>
      <span>{action}</span>
    </li>
  ));
  return actionList;
}

const extraDom = (extra: React.ReactNode[]) => {
  return extra && extra.length ? (
    <ul className="flex justify-center items-center space-x-2">
      {getExtra(extra)}
    </ul>
  ) : null;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  title = '',
  description = '',
  titleSize = '',
  descriptionSize = '',
  titleClass = '',
  descriptionClass = '',
  isBackButton,
  extra,
}) => {
  // hooks here
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <div className="flex items-center">
          {isBackButton && (
            <ChevronLeftIcon
              className="w-8 h-8 cursor-pointer"
              onClick={() => navigate(-1)}
            />
          )}
          <h1
            className={`font-bold ${titleSize ? titleSize : 'md:text-xl'} ${
              titleClass ? titleClass : ''
            } text-lg`}
          >
            {title}
          </h1>
        </div>
        <p
          className={`text-sm ${isBackButton ? 'ml-8' : ''} ${
            descriptionSize ? descriptionSize : 'md:text-base'
          } ${descriptionClass ? descriptionClass : ''}`}
        >
          {description}
        </p>
      </div>
      <div className="flex justify-end items-center">
        <div className="flex-shrink-0 self-center flex">
          {extra && extraDom(extra)}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
