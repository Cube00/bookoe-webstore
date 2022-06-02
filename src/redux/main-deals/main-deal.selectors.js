import {createSelector} from 'reselect';

const selectDeal = state => state.deals;

export const selectCurrentDeals = createSelector(
  [selectDeal],
  (deals)=> deals.deals
)
