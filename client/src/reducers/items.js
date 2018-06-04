import { FETCH_ITEMS_END, FETCH_ITEM_END } from '../actions/types';

function updateItems (state, payload) {
  const stateMap = {};

  [...state, ...payload].forEach(item => stateMap[item.recipe_id] = item)
  return [...Object.values(stateMap)]
}

export function items (state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS_END:
      return updateItems(state, action.payload)
    case FETCH_ITEM_END:
      return updateItems(state, [action.payload])
    default:
      return state;
  }
}