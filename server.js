// Here we start express and call the diferent views etc.
const express = require('express');
const app     = express();
const producersController = require('./controllers/producers.js');

// require our database here:
require('./db/db');


// We need our index/show,edit page to render at top
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// calling to the server for our controllers
// this is middle-ware
app.use('/producers', producersController);

// This is the channel for the local we are on
app.listen(3000, () => {
  console.log('We are listening');
});
