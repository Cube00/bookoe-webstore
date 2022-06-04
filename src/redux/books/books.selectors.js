import {createSelector} from 'reselect';

const selectBooks = state => state.books;

export const selectBookItems = createSelector(
  [selectBooks],
  (books) => books.books
)

export const selectSpecialBooks = createSelector(
  [selectBooks],
  (books) => books.books
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                    .filter((_,i)=> i<5)
)
