import * as React from 'react';

/* eslint-disable-next-line */
export interface GlobalLayoutProps {}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalLayout;
