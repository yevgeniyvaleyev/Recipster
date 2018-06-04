import { combineReducers } from 'redux';
import {loading} from './loading';
import {items} from './items';
import {error} from './error';

export default combineReducers({
  loading,
  items,
  error
});

export const getAllItems = (state) => [...state.items];
export const getItem = (state, id) => state.items.find(({recipe_id}) => recipe_id === id);
export const isLoading = (state) => state.loading;
export const hasError = (state) => !!state.error;
