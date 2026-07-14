import { Outlet } from 'react-router-dom';

import { DesktopHeader, MobileHeader } from '@components/Header';
import { DesktopFooter, MobileFooter } from '@components/Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeader className="block lg:hidden" />
      <DesktopHeader className="hidden lg:flex" />

      <main className="flex flex-1 flex-col bg-white">
        <Outlet />
      </main>

      <MobileFooter className="block lg:hidden" />
      <DesktopFooter className="hidden lg:block" />
    </div>
  );
};

export default Layout;
