// Juggling async
var http = require('http');
var concatStream = require('concat-stream');

var urls = [process.argv[2],process.argv[3],process.argv[4]];

var myResults = [];
var myCbCounter = 0;

function wrapHttpGet(index) {	
	http.get(urls[index], function(response) {
		response.pipe(concatStream(function(data) {

			myResults[index] = data.toString();
			myCbCounter++;			

			if (myCbCounter == 3) {
				for (var i = 0; i < 3; i++) {
					console.log(myResults[i]);
				}		
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	//console.log(urls[i]);
	wrapHttpGet(i);
}