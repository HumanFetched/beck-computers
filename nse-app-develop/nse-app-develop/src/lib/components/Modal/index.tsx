import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import Button from '../Button';

/* eslint-disable-next-line */
export interface ModalProps {
  visible: boolean;
  footer?: boolean;
  cancelText?: string;
  okText?: string;
  okType?: 'primary' | 'secondary' | 'ghost';
  title?: string | React.ReactNode;
  zIndex?: number;
  isOkLoading?: boolean;
  showOk?: boolean;
  showCancel?: boolean;
  centered?: boolean;
  footerButtonSize?: 'small' | 'default' | 'large';
  okButtonDisable?: boolean;
  widthClass?: string;
  heightClass?: string;
  isClosable?: boolean;
  setVisible: (status: boolean) => void;
  onCancel?: () => void;
  onOk?: () => void;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  footer = true,
  cancelText = 'Cancel',
  okText = 'Ok',
  title = '',
  zIndex = 999,
  visible = false,
  showOk = true,
  showCancel = true,
  isOkLoading = false,
  centered = false,
  okType = 'primary',
  footerButtonSize = 'default',
  okButtonDisable = false,
  widthClass,
  heightClass,
  isClosable = true,
  setVisible = () => null,
  onCancel = () => null,
  onOk = () => null,
  onClose = () => null,
}) => {
  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        style={{ zIndex }}
        onClose={() => {
          setVisible(false);
          onClose();
        }}
      >
        <div
          className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ${
            centered && 'items-center'
          }`}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:p-6 ${
                widthClass ? widthClass : 'max-w-lg'
              } ${heightClass ? heightClass : ''}`}
            >
              {(isClosable || title) && (
                <div className="flex justify-between w-full items-center mb-4">
                  {title && <p className="inline-block">{title}</p>}
                  {isClosable && (
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => {
                        setVisible(false);
                        onClose();
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  )}
                </div>
              )}
              {title && <hr className="text-gray-300" />}
              <div className={`${footer ? 'my-4' : 'mt-4'}`}>{children}</div>
              {footer && (showCancel || showOk) && (
                <>
                  <hr className="text-gray-300" />
                  <div className="mt-5 sm:mt-4 flex justify-end space-x-4">
                    {showCancel && (
                      <Button
                        size={footerButtonSize}
                        type="ghost"
                        onClick={() => onCancel()}
                      >
                        {cancelText}
                      </Button>
                    )}

                    {showOk && (
                      <Button
                        size={footerButtonSize}
                        type={okType}
                        disabled={okButtonDisable}
                        loading={isOkLoading}
                        onClick={() => onOk()}
                      >
                        {okText}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
