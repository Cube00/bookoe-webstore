import {booksReducerTypes} from './books.types'
import {booksAditions} from './books.utils'

const INITIAL_STATE = {
  books: []
};

const booksReducer = (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case booksReducerTypes.GET_BOOKS_DATA:
      return {
        ...state,
        books: booksAditions(action.payload)
      }
    default:
      return state
  }
}

export default booksReducer
