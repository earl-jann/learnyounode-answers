var fs = require('fs');

var directoryPath = process.argv[2];
var fileType = '.' + process.argv[3];

var escapeCount = undefined;

function readFileCallback(err, list) {
	if (err) {
		console.log(err);
	}

	var filteredByFileType = list.filter(function filteringType (type) {
			var dotIndex = type.lastIndexOf('.');
        	var ext = type.substring(dotIndex);

			if (ext === fileType) {
				return type;
			}
		});

	//console.log(filteredByFileType);
	for (var i = 0; i < filteredByFileType.length; i++) {
		console.log(filteredByFileType[i]);
	}
}

fs.readdir(directoryPath, readFileCallback);

