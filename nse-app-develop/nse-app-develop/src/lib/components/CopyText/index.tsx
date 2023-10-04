import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { copyToClipboard } from '../../utils/helper';

/* eslint-disable-next-line */
export interface CopyTextProps {
  children?: string;
  icon?: React.ReactNode;
  text?: string;
  iconTimeOut?: number;
  classNames?: string;
  onCopy?: () => void;
}

const getNode = (
  dom: React.ReactNode,
  defaultNode: React.ReactNode,
  needDom?: boolean,
) => {
  if (dom === true || dom === undefined) {
    return defaultNode;
  }
  return dom || (needDom && defaultNode);
};

export const CopyText: React.FC<CopyTextProps> = ({
  children,
  text,
  iconTimeOut,
  icon,
  classNames,
  onCopy = () => null,
}) => {
  const [copied, setCopied] = useState(false);
  const iconNodes = Array.isArray(icon) ? icon : [icon];

  const handleCopyClick = () => {
    onCopy();
    copyToClipboard(text || children || '');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, iconTimeOut || 2000);
  };

  return (
    <span className="space-x-1.5 text-sm flex">
      <span className={`${classNames}`}>{children}</span>
      {copied && (
        <span className="cursor-pointer inline-flex align-middle">
          {getNode(
            iconNodes[1],
            <CheckIcon className="w-4 text-green-500" />,
            true,
          )}
        </span>
      )}

      {!copied && (
        <span
          onClick={() => handleCopyClick()}
          className="cursor-pointer inline-flex align-middle"
        >
          {getNode(
            iconNodes[0],
            <DocumentDuplicateIcon className="w-4 text-secondary-600" />,
            true,
          )}
        </span>
      )}
    </span>
  );
};

export default CopyText;
