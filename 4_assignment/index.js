var fs = require('fs');
var filesArray = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt"];

var printFilesFunction = function (filesArray) {
	console.log("=======================");
	filesArray.forEach(function(fileName, index) {
		fs.readFile("./files_to_be_read/" + fileName, function (err, data) {
			printPattern(data);
		});	
	});
}

var printPattern = function (data) {
	console.log(data.toString());
	console.log(data.toString());
	console.log("=======================");
}

printFilesFunction(filesArray);
