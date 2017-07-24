var fs = require('fs');
var filesArray = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt"];
var fileCount = 0;

function readFilePromise (fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile("./files_to_be_read/" + fileName, function(err, data) {
			if(err) {
				 return reject(err);
			} 
		 	printPattern(data);
			return resolve();
		});
	});
}

var printPattern = function (data) {
  console.log(data.toString());
  console.log(data.toString());
  console.log("=======================");
}

function readFile(fileName) {
	fileCount++; 
	if(fileCount <= 5) {
		readFilePromise(fileName).then(function() {
			readFile(filesArray[fileCount])
		}, function(error) {
			throw error;	
		});
	}
}

console.log("=======================");
readFile(filesArray[fileCount]);