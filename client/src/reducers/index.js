import { combineReducers } from 'redux';
import {loading} from './loading';
import {items} from './items';

export default combineReducers({
  loading,
  items
});

export const getAllItems = (state) => [...state.items];
export const areItemsLoading = (state) => state.loading.items;