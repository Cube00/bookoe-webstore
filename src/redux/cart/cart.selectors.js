import {createSelector} from 'reselect';

const cartSelector = state => state.cart;

export const cartQuantitySelector = createSelector(
  [cartSelector],
  (cart)=> cart.cart.reduce((acc,curr)=> (acc + curr.quantity), 0)
)
