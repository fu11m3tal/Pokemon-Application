const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/controllers/controller.js')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/pokemon/:pokemon', controller.getPokemon);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
