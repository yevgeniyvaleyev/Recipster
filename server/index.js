const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const api = 'http://food2fork.com/api';
const key = '25a9908b4ee62956056ea24cb8e0ec35';

const getApi = (where) => api + where;
const handleError = (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body)
  }
}

app.use(cors());

app.get('/items', (req, res) => {
  request({
    uri: getApi('/search'),
    qs: { key },
    handleError
  })
  .pipe(res)
});

app.get('/items/:id', (req, res) => {
  request({
    uri: getApi('/get'),
    qs: { key, rId: req.params.id },
    handleError
  })
  .pipe(res)
});

app.listen(port, () => {
  console.log(`Lister App Server listening on port ${port}`);
});
