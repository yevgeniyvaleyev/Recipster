import { FETCH_ITEMS_END } from '../actions/types';

export function items (state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS_END:
      return [...action.payload]
    default:
      return state;
  }
}