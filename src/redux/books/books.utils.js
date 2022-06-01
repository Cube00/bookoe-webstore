export const booksAditions = (books) => {
  const aditionForBookProps = books.map((item)=>{
    return {...item, favorites: false}
  })

  return aditionForBookProps
}
