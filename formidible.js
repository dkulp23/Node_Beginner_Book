'use strict';

const formidable = require('formidable');
const http = require('http');
const util = require('util');

http.createServer(function(req, res) {
	if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
		let form = new formidable.IncomingForm();
		form.parse(req, function(error, fields, files) {
			res.writeHead(200, { 'Content-Type': 'text/plain'});
			res.write('receieved upload: \n\n');
			res.end(util.inspect({fields: fields, files: files}));
		});
		return;
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(
		'<form action="/upload" enctype="multipart/form-data" ' +
		'method="post">' +
		'<input type="text" name="title"><br>' +
		'<input type="file" name="upload" multiple="multiple"><br>' +
		'<input type="submit" value="Upload">' +
		'</form>'
	);
}).listen(3000);