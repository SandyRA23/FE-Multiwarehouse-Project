import React from 'react';
import { useLockedBody } from '../hooks/useBodyLock';
import { NavbarWrapper } from '../navbar/navbar';
import { SidebarWrapper } from '../sidebar/sidebar';
import { SidebarContext } from './layout-context';
import { WrapperLayout } from './layout.styles';

interface Props {
  children: React.ReactNode;
  isAdmin: boolean;
}

export const Layout = ({ children, isAdmin }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <WrapperLayout>
        {isAdmin ? (
          // Admin View
          <>
            <SidebarWrapper />
            <NavbarWrapper>{children}</NavbarWrapper>
          </>
        ) : (
          // Customer View
          <NavbarWrapper>{children}</NavbarWrapper>
        )}
      </WrapperLayout>
    </SidebarContext.Provider>
  );
};
