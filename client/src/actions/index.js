import * as actions from './action-creators';

const api = 'http://localhost:3001';

export const fetchItems = () => (dispatch, getState) => {
  dispatch(actions.onItemsFetchStart());
  fetch(`${api}/items`)
  .then((response) => response.json())
  .then((response) => {
    dispatch(actions.onItemsFetched(response.recipes));
  })
  .catch(() => { 
    dispatch(actions.onItemsFetchError())
  });
}

export const fetchItem = (id) => (dispatch, getState) => {
  dispatch(actions.onItemFetchStart());
  fetch(`${api}/items/${id}`)
  .then((response) => response.json())
  .then((response) => {
    dispatch(actions.onItemFetched(response.recipe));
  })
  .catch(() => {
    dispatch(actions.onItemFetchError())
  });
}