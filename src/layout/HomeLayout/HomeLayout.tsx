import { Outlet } from 'react-router-dom';

import { DesktopHeader, MobileHeader } from '@components/Header';
import { DesktopFooter, MobileFooter } from '@components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileHeader className="block lg:hidden" />
      <DesktopHeader className="hidden lg:flex" />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <MobileFooter className="block lg:hidden" />
      <DesktopFooter className="hidden lg:block" />
    </div>
  );
};

export default Layout;
