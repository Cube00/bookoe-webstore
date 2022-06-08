import "./carticon.styles.scss";

import {MdOutlineShoppingCart} from 'react-icons/md';

const CartIcon = ({cartQuantity, history}) => {
  return <>
    <div className="cart-icon" onClick={()=>history('/checkout')}>
      <div className="quantity">{cartQuantity}</div>
      <MdOutlineShoppingCart className="cart" />
    </div>
  </>
}

export default CartIcon
