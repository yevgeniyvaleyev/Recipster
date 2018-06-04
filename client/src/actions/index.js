import * as actions from './action-creators';

const api = 'http://localhost:3001';

export const fetchItems = () => (dispatch, getState) => {
  dispatch(actions.onItemsFetchStart());
  fetch(api)
  .then((response) => response.json())
  .then((response) => {
    dispatch(actions.onItemsFetched(response.recipes));
  })
  .catch(() => actions.onItemsFetchError());
}