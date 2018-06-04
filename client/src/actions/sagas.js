import { takeLatest, call, put } from 'redux-saga/effects'
import * as types from './types';
import * as api from '../api';
import * as actions from './index';

function* mySaga() {
  yield takeLatest(types.FETCH_ITEM_REQUESTED, fetchItem);
  yield takeLatest(types.FETCH_ITEMS_REQUESTED, fetchItems);
}

function* fetchItem(action) {
  yield put(actions.onItemFetchStart());
  try {
    const { recipe } = yield call(api.fetchItem, action.payload.id);
    yield put(actions.onItemFetched(recipe));
  } catch (e) {
    yield put(actions.onItemFetchError());
  }
}

function* fetchItems(action) {
  yield put(actions.onItemsFetchStart());
  try {
    const { recipes } = yield call(api.fetchItems);
    yield put(actions.onItemsFetched(recipes));
  } catch (e) {
    yield put(actions.onItemsFetchError());
  }
}

export default mySaga;