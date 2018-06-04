const api = 'http://localhost:3001';

export const fetchItem = (id) => 
  fetch(`${api}/items/${id}`)
  .then((response) => response.json())

export const fetchItems = () => 
  fetch(`${api}/items`)
  .then((response) => response.json())