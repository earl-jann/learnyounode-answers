var fs = require('fs');

var file = process.argv[2];

var buffer = fs.readFileSync(file);

var str = buffer.toString();

var strArray = str.split('\n');



console.log(strArray.length-1);