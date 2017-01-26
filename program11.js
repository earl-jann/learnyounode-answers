var http = require('http'),
	net = require('net'),
	fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var httpServer = http.createServer(function (request, response) {
	// handle request logic
	var readStream = fs.createReadStream(fileLocation);
	readStream.pipe(response);
});

httpServer.listen(port);