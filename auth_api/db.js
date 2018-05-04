const mongoose = require('mongoose');

// DB Setup
mongoose.Promise = Promise;
const conn = mongoose.createConnection('mongodb://localhost:api/auth');

module.exports = conn;
