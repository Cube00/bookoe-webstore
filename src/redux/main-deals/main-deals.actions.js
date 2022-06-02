import {mainDealsTypes} from './main-deals.types'

export const mainDealsAction = (data) => ({
  type: mainDealsTypes.GET_DEALS_DATA,
  payload: data
})
