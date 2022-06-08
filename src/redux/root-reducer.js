import { combineReducers } from 'redux'

import booksReducer from './books/books.reducer'
import mainDealsReducer from './main-deals/main-deals.reducer'
import cartReducer from './cart/cart.reducer'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  books: booksReducer,
  deals: mainDealsReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
