import React from 'react';

import Header from './header/header.component'

import Footer from './footer/footer.component'

const Layout = (props) => {
  return <>
    <Header />
    {props.children}
    <Footer />
  </>
}

export default Layout
