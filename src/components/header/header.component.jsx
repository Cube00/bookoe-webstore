import React from 'react';

import Logo from '../../assets/logo.png';

import './header.styles.scss';

import {AiOutlineUser} from 'react-icons/ai';

import CartIcon from '../cart-icon/carticon.component';

import {cartQuantitySelector} from '../../redux/cart/cart.selectors';

import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

import { useNavigate } from "react-router-dom";

const Header = ({cartQuantity}) =>{
  let history = useNavigate();

  return <>
    <div className="header">
      <div className="pos-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sign-buttons">
        <CartIcon history={history} cartQuantity={cartQuantity}/>
        <button className="sign-in">Log In</button>
        <button className="sign-up"><span><AiOutlineUser/></span>Sign Up</button>
      </div>
    </div>
  </>
}

const mapStateToProps = createStructuredSelector({
  cartQuantity: cartQuantitySelector
})

export default connect(mapStateToProps)(Header)
