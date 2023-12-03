import React from 'react'

import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'
import NavigationProductSection from './components/NavigationProduct/NavigationProductSection';
import Navigation2 from './components/Navigation/Navigation2';

function Layout() {
  return (
    <div>
      <Navigation2 className={"bg-[#2874F0] flex justify-center gap-4 "} />
      <NavigationProductSection/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
