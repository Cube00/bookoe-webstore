import React from 'react'

import Logo from '../../assets/logo.png'

import './header.styles.scss'

const Header = () =>{
  return <>
    <div className="header">
      <div className="pos-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sign-buttons">
        <button className="sign-in">Log In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </div>
  </>
}

export default Header
