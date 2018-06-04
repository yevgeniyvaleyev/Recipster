import { 
  FETCH_ITEMS_END,
  FETCH_ITEM_END,
  FETCH_ITEMS_START,
  FETCH_ITEM_START,
  FETCH_ITEM_ERROR,
  FETCH_ITEMS_ERROR
 } from '../actions/types';

 export const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_ITEMS_END:
    case FETCH_ITEM_END:
    case FETCH_ITEM_ERROR:
    case FETCH_ITEMS_ERROR:
      return false
    case FETCH_ITEMS_START:
    case FETCH_ITEM_START:
      return true
    default:
      return state;
  }
}