import React from 'react';

export type LoaderSizeType = 'small' | 'default' | 'large' | 'full';

export interface LoaderProps {
  size?: LoaderSizeType;
  loading: boolean;
  label?: string;
  children?: React.ReactChild | React.ReactChild[];
  color?: string;
}

const getLoaderSize = (size: LoaderSizeType) => {
  switch (size) {
    case 'small':
      return `w-1/4 h-1/4`;
    case 'default':
      return `w-1/2 h-1/2`;
    case 'large':
      return `w-4/5 h-4/5`;
    default:
      return `w-1/2 h-1/2`;
  }
};

const getLoaderSizeAdvance = (size: LoaderSizeType) => {
  switch (size) {
    case 'small':
      return `w-1/4 h-1/4`;
    case 'default':
      return `w-1/2 h-1/2`;
    case 'large':
      return `w-4/5 h-4/5`;
    case 'full':
      return `w-full h-full`;
    default:
      return `w-1/2 h-1/2`;
  }
};

export const Loader: React.FC<LoaderProps> = ({
  loading,
  label = '',
  children,
  size = 'default',
  color = 'currentColor',
}) => {
  return children ? (
    <div className="relative w-full">
      {loading && (
        <div className="absolute top-0 left-0 flex justify-center flex-col items-center w-full h-full">
          <svg
            fill="none"
            className={`${getLoaderSize(size)} animate-spin delay-1000`}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill={color}
              fillRule="evenodd"
            />
          </svg>
          {label && <span className="text-sm">{label}</span>}
        </div>
      )}
      <div
        className={`${
          loading && 'opacity-50 z-50 select-none pointer-events-none'
        }`}
      >
        {children}
      </div>
    </div>
  ) : loading ? (
    <div
      className={`flex justify-center items-center flex-col ${getLoaderSizeAdvance(
        size,
      )}`}
    >
      <svg
        fill="none"
        className={`w-full h-full animate-spin delay-1000`}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
          fill={color}
          fillRule="evenodd"
        />
      </svg>
      {label && <span className="text-sm">{label}</span>}
    </div>
  ) : null;
};

export default Loader;
