import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, XIcon } from '@heroicons/react/outline';
import { MenuAlt2Icon, MenuAlt3Icon } from '@heroicons/react/outline';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { classNames } from '../../utils/helper';
import { LOGO_125x125 } from '../../utils/constants';

/* eslint-disable-next-line */
export interface IHeaderProps {
  username: string;
  avatar: string;
  menuItem: {
    name: string;
    href: string;
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  }[];
  navMenuItems: {
    name: string;
    id: string;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    href?: string;
    children?: { name: string; href: string; id: string }[];
  }[];
  appTitle: string;
  logo: string;
  setIsMenuCollapsed: Dispatch<SetStateAction<boolean>>;
  isMenuCollapsed: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  username,
  avatar,
  menuItem = [],
  navMenuItems = [],
  appTitle,
  logo,
  setIsMenuCollapsed,
  isMenuCollapsed,
}) => {
  const [isButtonChange, setIsButtonChange] =
    useState<boolean>(isMenuCollapsed);
  return (
    <div
      className={`relative z-10 flex-shrink-0 flex h-16 bg-white ${styles.customShadow}`}
    >
      <Transition
        show={!isMenuCollapsed}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={'sm:hidden'}
      >
        <div
          className={`z-50 absolute top-0 inset-x-0 p-2  text-primary-700  transform origin-top-right`}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex justify-start items-center flex-shrink-0 ">
                  <Link
                    to={`/`}
                    className="flex justify-start items-center space-x-2 w-full"
                  >
                    <img
                      className="h-8 w-auto"
                      src={logo ? logo : LOGO_125x125}
                      alt={appTitle}
                    />
                    <span
                      className={`text-secondary font-bold text-lg truncate`}
                    >
                      {appTitle}
                    </span>
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none"
                    type="button"
                    onClick={() => {
                      setIsMenuCollapsed(true);
                      setIsButtonChange(true);
                    }}
                  >
                    <XIcon className="h-7 w-7" />
                  </button>
                </div>
              </div>
              <div className="grid gap-y-1.5">
                {navMenuItems.map((item, index) => (
                  <Link
                    key={`menu-item-${index}`}
                    to={item.href as string}
                    className={
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    }
                    onClick={() => {
                      setIsMenuCollapsed(true);
                      setIsButtonChange(true);
                    }}
                  >
                    <item.icon
                      className={`flex-shrink-0 h-6 w-6`}
                      aria-hidden="true"
                    />
                    <span
                      className={`flex-1 truncate ml-3 
                    `}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div>
                <hr className="w-full border-1 border-gray-400"></hr>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <div className="relative my-3 h-9 w-9 rounded-md flex justify-center items-center cursor-pointer ml-2">
        {isButtonChange ? (
          <MenuAlt2Icon
            className="h-7 w-7 text-primary-700"
            onClick={() => {
              setIsMenuCollapsed(false);
              setIsButtonChange(false);
            }}
          />
        ) : (
          <MenuAlt3Icon
            className="h-7 w-7 text-primary-700"
            aria-hidden="true"
            onClick={() => {
              setIsMenuCollapsed(true);
              setIsButtonChange(true);
            }}
          />
        )}
      </div>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">{/* search Menu here */}</div>

        <div className="ml-4 flex items-center md:ml-6">
          <BellIcon
            className="h-6 w-6 text-gray-400 cursor-pointer"
            aria-hidden="true"
          />
        </div>

        <div className="ml-4 flex items-center md:ml-6">
          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="max-w-xs flex items-center text-sm rounded-full space-x-2">
                <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
                <span>{username}</span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-in-out duration-75"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in-out duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {menuItem.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }: { active: boolean }) => (
                      <Link
                        to={item.href}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'px-4 py-2 text-sm text-gray-700 flex items-center ',
                        )}
                      >
                        {item.icon ? (
                          <item.icon
                            className="mr-3 flex-shrink-0 h-5 w-5 text-secondary-600"
                            aria-hidden="true"
                          />
                        ) : (
                          ''
                        )}
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
