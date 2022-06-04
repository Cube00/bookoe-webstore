export const addItemToCart = (cart, item) =>{
  const findExactItem = cart.find(cartItem => cartItem.primary_isbn13 === item.primary_isbn13);

  if(findExactItem) {
    const newCart = cart.map(cartItem => {
      if(cartItem.primary_isbn13 === item.primary_isbn13) {
        return {...cartItem, quantity: cartItem.quantity + 1}
      }
      return cartItem
    })
    return [...newCart]
  }

  return [...cart, {...item, quantity: 1}]
}
