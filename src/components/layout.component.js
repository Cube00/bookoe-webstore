import React from 'react';

import Header from './header/header.component'

const Layout = (props) => {
  return <>
    <Header />
    {props.children}
    <h2>rame 2</h2>
  </>
}

export default Layout
