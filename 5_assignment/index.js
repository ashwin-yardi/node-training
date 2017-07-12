var fs = require('fs');
var filesArray = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt"];
var fileCount = 0;

function readFilePromise (fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile("./files_to_be_read/" + fileName, function(err, data) {
			if(err) {
				reject(err);
			} else {
			 	printPattern(fileName);
				resolve(data);
			}
		});
	});
}

var printPattern = function (data) {
  console.log(data.toString());
  console.log(data.toString());
  console.log("=======================");
}

function readFile(fileName) {
	var toBeReturned =  function(){
		fileCount++; 
		if(fileCount <= 5) {
			readFilePromise(fileName).then(readFile(filesArray[fileCount]));
		}
	}
	return toBeReturned;
}

console.log("=======================");
readFile(filesArray[fileCount])();