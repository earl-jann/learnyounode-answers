var fs = require('fs');


module.exports = function listFilesInDirWhere(directoryPath, fileExtension, callback) {


	function readFileCallback(err, list) {
		if (err) {
			return callback(err);
		}

		var filteredByFileType = list.filter(function filteringType (type) {
				var dotIndex = type.lastIndexOf('.');
	        	var ext = type.substring(dotIndex);

				if (ext === ('.' + fileExtension)) {
					return type;
				}
			});

		// console.log(filteredByFileType);
		// for (var i = 0; i < filteredByFileType.length; i++) {
			// console.log(filteredByFileType[i]);
		// }

		callback(null, filteredByFileType);
	};

	fs.readdir(directoryPath, readFileCallback);
}


