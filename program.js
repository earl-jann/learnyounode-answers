
var length = process.argv.length;

var sum = 0;

for (var i = 2; i < length; i++) {
    sum += Number(process.argv[i]);
    //console.log(process.argv[i]);
}
console.log(sum);
//console.log(process.argv);