// Write a TCP time server!  

// Your server should listen to TCP connections on the port provided by the  
// first argument to your program. For each connection you must write the  
// current date & 24 hour time in the format:  

//    "YYYY-MM-DD hh:mm"  

// followed by a newline character. Month, day, hour and minute must be  
// zero-filled to 2 integers. For example:  

//    "2013-07-06 17:42"  

// After sending the string, close the connection.  

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var currentTime = function () {
	 // var date = new Date();
	 // console.log('date:'+date);
	 // for zero left padding if < 2 digits
	 // return '' + 
		//  date.getFullYear()  + '-' + 
	 //     (date.getMonth()+1) + '-' +   // starts at 0
	 //     date.getDate() + ' ' +       // returns the day of month  
	 //     date.getHours() + ':' +  
	 //     date.getMinutes();
	 return strftime("%F %R") + "\n";
}

var server = net.createServer(function (socket) {
	// socket handling logic
	socket.write(currentTime());
	socket.end();
});
// console.log('port:' + port);
server.listen(port);