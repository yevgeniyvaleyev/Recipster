import * as types from './types';

export const onItemsFetched = (data) => ({
  type: types.FETCH_ITEMS_END,
  payload: data
});

export const onItemsFetchStart = () => ({
  type: types.FETCH_ITEMS_START,
  payload: {}
});

export const onItemsFetchError = () => ({
  type: types.FETCH_ITEMS_ERROR,
  payload: {}
});