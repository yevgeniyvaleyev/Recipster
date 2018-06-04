import { 
  FETCH_ITEMS_END,
  FETCH_ITEM_END,
  FETCH_ITEMS_START,
  FETCH_ITEM_START
 } from '../actions/types';
 import { combineReducers } from 'redux';

function dataLoading (state = false, action) {
  switch (action.type) {
    case FETCH_ITEMS_END:
    case FETCH_ITEM_END:
      return false
    case FETCH_ITEMS_START:
    case FETCH_ITEM_START:
      return true
    default:
      return state;
  }
}

export const loading = combineReducers({
  data: dataLoading
})