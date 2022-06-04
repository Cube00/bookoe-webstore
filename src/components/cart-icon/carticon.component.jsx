import "./carticon.styles.scss";

import {MdOutlineShoppingCart} from 'react-icons/md';

const CartIcon = ({cartQuantity}) => {
  return <>
    <div className="cart-icon">
      <div className="quantity">{cartQuantity}</div>
      <MdOutlineShoppingCart className="cart" />
    </div>
  </>
}

export default CartIcon
