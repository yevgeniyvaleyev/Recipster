import * as types from './types';

export const onItemsFetched = (data) => ({
  type: types.FETCH_ITEMS_END,
  payload: data
});

export const onItemsFetchRequested = () => ({
  type: types.FETCH_ITEMS_REQUESTED,
  payload: {}
});

export const onItemsFetchStart = () => ({
  type: types.FETCH_ITEMS_START,
  payload: {}
});

export const onItemsFetchError = () => ({
  type: types.FETCH_ITEMS_ERROR,
  payload: {}
});

export const onItemFetched = (data) => ({
  type: types.FETCH_ITEM_END,
  payload: data
});

export const onItemFetchStart = () => ({
  type: types.FETCH_ITEM_START,
  payload: {}
});

export const onItemFetchRequested = (id) => ({
  type: types.FETCH_ITEM_REQUESTED,
  payload: { id }
});

export const onItemFetchError = () => ({
  type: types.FETCH_ITEM_ERROR,
  payload: {}
});