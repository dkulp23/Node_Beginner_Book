'use strict';

const http = require('http');
const url = require('url');

function start(route) {
	function onRequest(req, res) {
		let pathname = url.parse(req.url).pathname;
		console.log(`Request for ${pathname} received.`);
		res.writeHead(200, { 'Content-Type': 'text/plain'});
		res.write('hello world');
		res.end();	
	};

	route(pathname);

	http.createServer(onRequest).listen(3000);
	console.log('Server has started');
};

exports.start = start;