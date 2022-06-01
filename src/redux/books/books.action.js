import {booksReducerTypes} from './books.types'

export const getBooksData = (books) => ({
  type: booksReducerTypes.GET_BOOKS_DATA,
  payload: books
})
