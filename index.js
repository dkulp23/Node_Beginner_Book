'use strict';

const server = require('./server.js');
const router = require('./router.js');
const requestHandler = require('./requestHandlers.js');

const handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(router.route, handle);