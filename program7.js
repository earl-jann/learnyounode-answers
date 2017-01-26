var http = require('http');
var url = process.argv[2];

function callback(response) {
	//console.log('Code: ' + response.statusCode);
	response.setEncoding('utf8');
	response.on("data", function (data) {		
		console.log(data);
	});

	response.on("error", function (error) {
		console.log('Error: ' + error);
	})
}

http.get(url, callback);