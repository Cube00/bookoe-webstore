export const booksAditions = (books) => {
  const aditionForBookProps = books.map((item)=>{
    const randomPrice = `$ ${Math.floor(Math.random() * (100 - 15 + 1)) + 15}.${Math.floor(Math.random() * 100)}`;
    return {...item, price: randomPrice,  favorites: false}
  })

  return aditionForBookProps
}
