import { combineReducers } from 'redux'

import booksReducer from './books/books.reducer'
import mainDealsReducer from './main-deals/main-deals.reducer'

export default combineReducers({
  books: booksReducer,
  deals: mainDealsReducer
})
