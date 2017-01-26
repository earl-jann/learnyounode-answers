var mymodule = require('./program6_filter');
var directoryPath = process.argv[2];
var fileType = process.argv[3];
  

function bar (err, data) {  
	if (err)  
	   console.log('Error: ' + err);

	 // ... no error, continue doing cool things with `data`  

	 // all went well, call callback with `null` for the error argument  

	// console.log('Data: ' + data);
	// for (var i = 0; i < data.length; i++) {
	// 	console.log(data[i]);
	// }
	data.forEach(function (file) {
		console.log(file);
	})

};   

mymodule(directoryPath, fileType, bar);
  