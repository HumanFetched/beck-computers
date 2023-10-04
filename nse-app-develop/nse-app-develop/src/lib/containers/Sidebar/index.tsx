import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { LOGO_125x125 } from '../../utils/constants';
import { Link, useLocation } from 'react-router-dom';
import { useActiveMenu } from '../../hooks';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export interface SidebarProps {
  menuItems: {
    name: string;
    id: string;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    href?: string;
    current?: boolean;
    children?: { name: string; href: string; id: string }[];
  }[];
  isMenuCollapsed: boolean;
  setIsMenuCollapsed: Dispatch<SetStateAction<boolean>>;
  appTitle: string;
  logo: string;
}
const retnum = (str: string) => {
  const num = str.replace(/[^0-9]/g, '');
  return parseInt(num, 10);
};

const getHoverEffectStyles = (
  activeMenu: string,
  item: string,
  isMenuCollapsed: boolean,
  active?: boolean,
) => {
  let hoverClasses: string;
  if (isMenuCollapsed) {
    hoverClasses = '';
    return hoverClasses;
  }
  hoverClasses =
    activeMenu === item
      ? `transform hover:translate-x-2 transition-transform ease-in duration-200`
      : `${
          active
            ? 'transform translate-x-2 transition-transform ease-in duration-200'
            : 'hover:text-gray-900 transform hover:translate-x-2 transition-transform ease-in duration-200'
        }`;
  return hoverClasses;
};

const getThemeStyling = (activeMenu: string, item: string) => {
  return activeMenu === item || `${Math.trunc(+activeMenu / 10)}` === item
    ? 'bg-gray-100 text-gray-900'
    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';
};

const getThemeIconStyling = (activeMenu: string, item: string) => {
  return activeMenu === item
    ? 'text-gray-500'
    : 'text-gray-400 group-hover:text-gray-500';
};

export const Sidebar: FC<SidebarProps> = ({
  menuItems = [],
  isMenuCollapsed = false,
  appTitle,
  logo,
  setIsMenuCollapsed = () => null,
}) => {
  const location = useLocation();
  const activeMenu = useActiveMenu(location.pathname);

  const [currentMenu, setCurrentMenu] = useState('0');
  return (
    <div
      className={`flex flex-grow flex-col overflow-y-auto  bg-white pt-5 pb-4 ${
        isMenuCollapsed ? 'w-16' : 'w-56'
      }`}
    >
      <div className="flex justify-start items-center flex-shrink-0 px-4">
        <Link
          to={`/`}
          className="flex justify-start items-center space-x-2 w-full"
        >
          <img
            className="h-8 w-auto"
            src={logo ? logo : LOGO_125x125}
            alt={appTitle}
          />
          {!isMenuCollapsed && (
            <span className={`text-secondary font-bold text-xl truncate`}>
              {appTitle}
            </span>
          )}
        </Link>
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-3 bg-white px-2" aria-label="Sidebar">
          {menuItems.map((item) =>
            !item.children ? (
              <div
                key={item.name}
                onClick={() => setCurrentMenu(item?.id || '0')}
              >
                <Link
                  to={item?.href || ''}
                  className={classNames(
                    `group w-full flex items-center ${
                      isMenuCollapsed ? 'justify-center' : 'justify-start'
                    } p-2 text-sm font-medium rounded-md`,
                    `${getThemeStyling(
                      activeMenu,
                      `${retnum(item.id)}`,
                    )}} ${getHoverEffectStyles(
                      activeMenu,
                      `${retnum(item.id)}`,
                      isMenuCollapsed,
                    )}`,
                    `${item.href === '#' && 'opacity-50 cursor-not-allowed'}`,
                  )}
                >
                  <item.icon
                    className={classNames(
                      'flex-shrink-0 h-6 w-6',
                      getThemeIconStyling(activeMenu, item.name),
                    )}
                    aria-hidden="true"
                  />
                  {!isMenuCollapsed && (
                    <span className="ml-2">{item.name}</span>
                  )}
                </Link>
              </div>
            ) : (
              <div key={item.name} className="space-y-1.5">
                <span
                  className={classNames(
                    `group w-full flex items-center ${
                      isMenuCollapsed ? 'justify-center' : 'justify-start'
                    } p-2 text-left text-sm font-medium rounded-md focus:outline-none`,
                    `${getThemeStyling(
                      activeMenu,
                      `${retnum(item.id)}`,
                    )}} ${getHoverEffectStyles(
                      activeMenu,
                      `${retnum(item.id)}`,
                      isMenuCollapsed,
                    )} ${item.id !== currentMenu && 'cursor-pointer'}`,
                  )}
                  onClick={() => {
                    setIsMenuCollapsed(false);
                    setCurrentMenu(item?.id || '0');
                  }}
                >
                  <>
                    <item.icon
                      className=" h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {!isMenuCollapsed && (
                      <>
                        <span className="ml-2 flex-1">{item.name}</span>
                        <svg
                          className={classNames(
                            item?.id === currentMenu
                              ? 'text-gray-400 rotate-90'
                              : 'text-gray-300',
                            'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400',
                          )}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>
                      </>
                    )}
                  </>
                </span>
                {!isMenuCollapsed && item?.id === currentMenu && (
                  <div className="ml-11 space-y-1">
                    {item?.children?.map((subItem) => (
                      <Link
                        to={subItem?.href || ''}
                        key={subItem.name}
                        className={`${getThemeStyling(
                          activeMenu,
                          `${retnum(subItem.id)}`,
                        )}} ${getHoverEffectStyles(
                          activeMenu,
                          `${retnum(subItem.id)}`,
                          isMenuCollapsed,
                        )} 
                        ${
                          subItem.href === '#' &&
                          'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <p
                          className={classNames(
                            'group flex w-full items-center rounded-md py-2  px-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            `${getThemeStyling(
                              activeMenu,
                              `${retnum(subItem.id)}`,
                            )}} ${getHoverEffectStyles(
                              activeMenu,
                              `${retnum(subItem.id)}`,
                              isMenuCollapsed,
                            )}`,
                          )}
                        >
                          {subItem.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}
        </nav>
      </div>
    </div>
  );
};
