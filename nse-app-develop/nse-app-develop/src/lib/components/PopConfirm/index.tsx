import { Transition } from '@headlessui/react';
import React, { useState, useRef, useEffect, Fragment } from 'react';
import { usePopper } from 'react-popper';
import Button from '../Button';

/* eslint-disable-next-line */

export type IconType =
  | 'default'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'secondary';
export type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';
export type BasePlacement = 'top' | 'bottom' | 'right' | 'left';
export type IOkButtonHtmlType = 'button' | 'reset' | 'submit';

export type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
export type Placement = AutoPlacement | BasePlacement | VariationPlacement;

export interface PopconfirmProps {
  children: string | React.ReactChild | React.ReactChild[];
  placement?: Placement;
  className?: string;
  title: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  okText?: string;
  okButtonHtmlType?: IOkButtonHtmlType;
  cancelText?: string;
  icon?: (props: React.ComponentProps<'svg'> | Element) => JSX.Element;
  iconType?: IconType;
  showIcon?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const getIconClass = (type: IconType) => {
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
    case 'secondary':
      return 'text-secondary-600';
    default:
      return `text-secondary`;
  }
};

export const Popconfirm: React.FC<PopconfirmProps> = (props) => {
  const {
    title,
    children,
    placement = 'auto',
    showIcon = true,
    okText = '',
    okButtonHtmlType = 'button',
    cancelText = '',
    onCancel = () => null,
    onConfirm = () => null,
    iconType = 'default',
    loading = false,
    disabled = false,
  } = props;

  const [visible, setVisiblity] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const referenceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const popperRef = useRef<any>(null);

  const { styles, attributes, update } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: placement,

      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  );

  const handleWindowClick = (event: Event) => {
    if (popperRef?.current?.contains(event.target)) {
      return;
    }
    if (referenceRef?.current?.contains(event.target)) {
      return;
    }
    setVisiblity(false);
  };

  useEffect(() => {
    window.addEventListener('click', (event) => handleWindowClick(event));
    return () => {
      window.removeEventListener('click', (event) => handleWindowClick(event));
    };
  }, []);

  const handleOtherPopconfirms = () => {
    document?.querySelector('body')?.click();
  };

  return (
    <>
      <span
        ref={referenceRef}
        onClick={(e) => {
          e.stopPropagation();
          if (disabled) return;
          if (update) update();
          handleOtherPopconfirms();
          setVisiblity(!visible);
        }}
        className={`inline-block cursor-pointer`}
      >
        {children}
      </span>
      <div
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        className="shadow-lg bg-white z-50 min-w-max"
      >
        <Transition
          show={visible}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div
            style={styles.offset}
            className={`${
              visible ? 'flex flex-col p-3 border-2 border-gray-50' : 'hidden'
            }`}
          >
            <div className="flex justify-center items-center">
              {showIcon && props.icon && (
                <props.icon
                  className={`h-5 w-5 ${getIconClass(iconType)} mr-2`}
                  aria-hidden="true"
                />
              )}
              <p className="text-gray-900">{title}</p>
            </div>
            <div className="flex justify-end mt-2 items-center">
              <div>
                <Button
                  size="small"
                  type="ghost"
                  onClick={() => {
                    onCancel();
                    setVisiblity(false);
                  }}
                >
                  <p>{cancelText || 'Cancel'}</p>
                </Button>
              </div>

              <div className="ml-2">
                <Button
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    onConfirm();
                    setVisiblity(false);
                  }}
                  loading={loading}
                  htmlType={okButtonHtmlType || 'button'}
                >
                  <p>{okText || 'OK'}</p>
                </Button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Popconfirm;
