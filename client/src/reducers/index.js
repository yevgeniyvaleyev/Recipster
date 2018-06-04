import { combineReducers } from 'redux';
import {loading} from './loading';
import {items} from './items';

export default combineReducers({
  loading,
  items
});

export const getAllItems = (state) => [...state.items];
export const getItem = (state, id) => state.items.find(({recipe_id}) => recipe_id === id);
export const areItemsLoading = (state) => state.loading.data;