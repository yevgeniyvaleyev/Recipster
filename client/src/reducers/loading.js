import { 
  FETCH_ITEMS_END,
  FETCH_ITEMS_START
 } from '../actions/types';
 import { combineReducers } from 'redux';

function itemsLoading (state = false, action) {
  switch (action.type) {
    case FETCH_ITEMS_END:
      return false
    case FETCH_ITEMS_START:
      return true
    default:
      return state;
  }
}

export const loading = combineReducers({
  items: itemsLoading
})