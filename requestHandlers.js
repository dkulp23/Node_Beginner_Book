'use strict';

const querystring = require('querystring');

function start(res, data) {
	console.log('Request handler "start" was called.');

	const body = '<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html; ' +
	'charset=UTF-8" />' +
	'</head>' +
	'<body>' +
	'<form action="/upload" method="post">' +
	'<textarea name="text" rows="20" cols="60"></textarea>' +
	'<input type="submit" value="Submit text" />' +
	'</form>' +
	'</body>' +
	'</html>';

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(body);
	res.end();
};

function upload(res, data) {
	console.log('Request handler "upload" was called.');
	res.writeHead(200, { 'Content-Type': 'text/plain'});
	res.write(`You've sent the text: ${querystring.parse(data).text}`);
	res.end();
};

exports.start = start;
exports.upload = upload;