import { 
  FETCH_ITEM_ERROR,
  FETCH_ITEMS_ERROR,
  FETCH_ITEM_START,
  FETCH_ITEMS_START
 } from '../actions/types';

export function error (state = false, action) {
  switch (action.type) {
    case FETCH_ITEM_ERROR:
    case FETCH_ITEMS_ERROR:
      return true;
    case FETCH_ITEMS_START:
    case FETCH_ITEM_START:
      return false;
    default:
      return state;
  }
}