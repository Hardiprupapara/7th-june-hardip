// Users.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('Users', userSchema);
