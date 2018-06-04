import { 
  FETCH_ITEM_ERROR,
  FETCH_ITEMS_ERROR,
 } from '../actions/types';

export function error (state = {}, action) {
  switch (action.type) {
    case FETCH_ITEM_ERROR:
      return {
        ...state,
        item: true
      }
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        items: true
      }
    default:
      return state;
  }
}