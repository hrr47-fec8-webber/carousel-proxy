const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../client')));
app.use('/:id', express.static(path.join(__dirname, '/../client')));

app.use(bodyParser.json());

app.get('/api/images/:id', (req, res) => {
  const id = req.url.slice(12);
  axios.get(`http://localhost:3001/api/images/${id}`)
    .then((data) => res.send(data.data))
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
