const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
//app.use(morgan('combined')); // Disable for production
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
// const port = process.env.PORT || 80;
// const server = http.createServer(app);

// server.listen(port);
// console.log('Server running on port: ', port);

console.log('Auth server files ran');

exports.app = app;
