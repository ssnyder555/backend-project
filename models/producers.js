// here we set up our producer Schema
// requiring the mongoose

const mongoose = require('mongoose');

const producerSchema = mongoose.Schema({
  name: String
});

const Producer = mongoose.model('Producer', producerSchema);

// send it out
module.exports = Producer;
