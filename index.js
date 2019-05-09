const express = require('express');
const vhost = require('vhost');
const env = process.env.ENV || 'production';
const siteAddress = (env === 'dev') ? 'localhost' : 'reactprototypes.com';
const defaultDevPort = 9000;
const envPort = process.env.PORT;
const port = envPort ? (env === 'dev' && envPort === '80' ) ? 9000 : envPort : (env === 'dev') ? defaultDevPort : 80;

express()
.use(vhost('scottbowlerdev.com', require('./main').app))
.use(vhost('api.' + siteAddress, require('./auth_api').app))
.use(vhost('dev.' + siteAddress, require('./dev-react-prototypes').app))
.use(vhost(siteAddress, require('./react-prototypes').app))
.use(vhost('chat.reactprototypes.com', require('./fire-chat').app))
.use(vhost('dev.lfzprototypes.com', require('./dev.lfzprototypes').app))
.use(vhost('scapi.lfzprototypes.com', require('./sweet-corner-api').app))
.use(vhost('lfzprototypes.com', require('./lfzprototypes').app))
.use(vhost('enrollment.lfzservices.com', require('./enrollment_api/production').app))
.use(vhost('dev.enrollment.lfzservices.com', require('./dev.enrollment_api/livedev').app))
.listen(port);

console.log('Server running on port:', port);
