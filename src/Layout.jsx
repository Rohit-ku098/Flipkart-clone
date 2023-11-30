import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'
import NavigationProductSection from './components/NavigationProduct/NavigationProductSection';

function Layout() {
  return (
    <div>
      <Navigation className={"bg-[#2874F0] flex justify-center gap-4 "} />
      <NavigationProductSection/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
