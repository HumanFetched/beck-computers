import React, { useState } from 'react';
import { Header } from '../../lib/containers';
import { Sidebar } from '../../lib/containers/Sidebar';
import { useAppSelector } from '../../lib/state';
import { userNavigation } from '../../lib/utils/constants/menu';

/* eslint-disable-next-line */
export interface BasicLayoutProps {
  title: string;
  logo: string;
  appTitle: string;
  menuItems: {
    name: string;
    id: string;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    href?: string;
    children?: { name: string; href: string; id: string }[];
  }[];
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  title,
  logo,
  appTitle,
  menuItems,
}) => {
  const { currentUser: user } = useAppSelector((state) => state.user);

  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(true);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Static sidebar for desktop */}
      <div className="hidden bg-primary-800 md:flex md:flex-shrink-0">
        <Sidebar
          menuItems={menuItems}
          appTitle={appTitle}
          logo={logo}
          setIsMenuCollapsed={setIsMenuCollapsed}
          isMenuCollapsed={isMenuCollapsed}
        />
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-visible">
        <Header
          username={user.firstName}
          avatar={user.profileImage}
          navMenuItems={menuItems}
          appTitle={appTitle}
          logo={logo}
          menuItem={userNavigation}
          setIsMenuCollapsed={setIsMenuCollapsed}
          isMenuCollapsed={isMenuCollapsed}
        />
        <main className="flex-1 flex flex-col justify-between relative overflow-y-auto focus:outline-none">
          <div className="flex-grow flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            </div>
            <div className="max-w-full flex-grow p-6 m-6 bg-white shadow-md">
              {/* Replace with your content */}
              <div>{children}</div>
              {/* /End replace */}
            </div>
          </div>
          {/* {!isWhitelabelDomain(getAppDomainName(), process.env.NX_APP_BASE_DOMAIN as string) && (
                        <Footer />
                    )} */}
        </main>
      </div>
    </div>
  );
};

export default BasicLayout;
