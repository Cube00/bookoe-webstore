import {cartActions} from './cart.types'

export const addToCart = (item) => ({
  type: cartActions.ADD_ITEM_TO_CART,
  payload: item
})
