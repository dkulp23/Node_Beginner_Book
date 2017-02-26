'use strict';

const http = require('http');
const url = require('url');

function start(route, handle) {
	function onRequest(req, res) {
		let pathname = url.parse(req.url).pathname;
		console.log(`Request for ${pathname} received.`);

		route(handle, pathname);

		res.writeHead(200, { 'Content-Type': 'text/plain'});
		res.write('hello world');
		res.end();	
	};


	http.createServer(onRequest).listen(3000);
	console.log('Server has started');
};

exports.start = start;