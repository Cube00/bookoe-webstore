import React from 'react';

import Header from './header/header.component';

import Footer from './footer/footer.component';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return <>
    <Header />
      <Outlet />
    <Footer />
  </>
}

export default Layout
