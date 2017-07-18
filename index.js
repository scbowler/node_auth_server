const express = require('express');
const vhost = require('vhost');
const env = process.env.ENV || 'production';
const siteAddress = (env === 'dev') ? 'localhost' : 'scottbowlerdev.com';
const defaultDevPort = 9000;
const envPort = process.env.PORT;
const port = envPort ? (env === 'dev' && envPort === '80' ) ? 9000 : envPort : (env === 'dev') ? defaultDevPort : 80;

express()
.use(vhost(siteAddress, require('./main').app))
.use(vhost('api.' + siteAddress, require('./auth_api').app))
.use(vhost('dev.reactprototypes.com', require('./dev-react-prototypes').app))
.listen(port);

console.log('Server running on port:', port);
