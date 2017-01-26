var fs = require('fs');

var file = process.argv[2];
var escapeCount = undefined;

function callback(err, data) {
	if (err) {
		console.log(err);
	}
    var str = data.toString();
    var strArray = str.split('\n');
    escapeCount = strArray.length-1;
    console.log(escapeCount);
}

fs.readFile(file, callback);

