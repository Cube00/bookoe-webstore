import {mainDealsTypes} from './main-deals.types'

const INITIAL_STATE = {
  deals: []
}

const mainDealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mainDealsTypes.GET_DEALS_DATA:
      return {
        ...state,
        deals: action.payload
      }
    default:
      return state
  }
}

export default mainDealsReducer
