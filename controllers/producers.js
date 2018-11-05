// require our routers here, also express
const express = require('express');
const router  = express.Router();

// render Producers-index.ejs
router.get('/', (req, res) => {
  res.render('producers/index.ejs');
});

// make a route for the Producers- new.ejs
router.get('/new', (req, res) => {
  res.render('producers/new.ejs');
});
// export the controller out?
module.exports = router;
