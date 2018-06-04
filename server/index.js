const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = 3001;
const api = 'http://food2fork.com/api/search';
const apiKey = '25a9908b4ee62956056ea24cb8e0ec35';

app.use(cors());
app.get('/', (req, res) => {
  request({
    uri: api,
    qs: {
      key: apiKey
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body)
      }
    }
  })
  .pipe(res)
});

app.listen(port, () => {
  console.log(`Lister App Server listening on port ${port}`);
});
