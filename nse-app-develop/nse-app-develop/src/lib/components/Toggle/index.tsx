import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader';

/* eslint-disable-next-line */
export type ToggleSizeType = 'small' | 'default' | 'large';
export type ToggleChildrenType = string | React.ReactChild | React.ReactNode;

export interface ToggleProps {
  checked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: ToggleSizeType;
  label?: string;
  checkedChildren?: ToggleChildrenType;
  uncheckedChildren?: ToggleChildrenType;
  onChange?: (checked: boolean) => void;
}

const getToggleSize = (size: ToggleSizeType) => {
  switch (size) {
    case 'default':
      return `h-6`;
    case 'small':
      return `h-5`;
    case 'large':
      return `h-8`;
    default:
      return `h-6`;
  }
};

const getCirclehSize = (size: ToggleSizeType) => {
  switch (size) {
    case 'default':
      return `w-4 h-4`;
    case 'small':
      return `w-3 h-3`;
    case 'large':
      return `w-5 h-5`;
    default:
      return `w-4 h-4`;
  }
};

const getTextSize = (size: ToggleSizeType) => {
  switch (size) {
    case 'default':
      return `text-sm`;
    case 'small':
      return `text-xs`;
    case 'large':
      return `text-md`;
    default:
      return `text-sm`;
  }
};

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  loading = false,
  disabled = false,
  size = 'default',
  label = '',
  checkedChildren = <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>,
  uncheckedChildren = <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>,
  onChange = () => null,
}) => {
  const [enabled, setEnabled] = useState<boolean>(checked);

  useEffect(() => {
    setEnabled(checked);
  }, [checked]);

  return (
    <div className="w-auto flex flex-col items-start justify-start">
      {label && (
        <label className={`flex mb-1 text-sm font-medium text-gray-700 `}>
          {label}
          {/* {required && <span className={`text-red-500 ml-1`}>*</span>} */}
        </label>
      )}
      <div
        onDoubleClick={() => null}
        onClick={() => {
          if (disabled) return;
          setEnabled(!enabled);
          onChange(!enabled);
        }}
        className={`
                    overflow-hidden
                    ${enabled ? 'bg-primary-500' : 'bg-gray-400'}
                    w-auto
                    ${getToggleSize(size)}
                    inline-flex items-center rounded-full  transition-colors ease-in-out duration-200 focus:outline-none ${
                      disabled || loading
                        ? 'opacity-50 cursor-not-allowed'
                        : 'cursor-pointer'
                    }`}
      >
        {enabled && checkedChildren && (
          <div className={`inline-block ml-2 ${getTextSize(size)} text-white`}>
            {checkedChildren}
          </div>
        )}
        <span
          className={`${enabled ? 'right-0.5' : 'left-0.5'}
                       mx-1 inline-block ${getCirclehSize(
                         size,
                       )} transform bg-white rounded-full transition-transform`}
        >
          <Loader loading={loading} size="full" />
        </span>
        {!enabled && uncheckedChildren && (
          <div className={`inline-block mr-2 ${getTextSize(size)} text-white`}>
            {uncheckedChildren}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
