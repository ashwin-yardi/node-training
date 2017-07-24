var fs = require('fs');
var filesArray = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt"];
var fileCount = 0;

var readFile = function (fileName) {
  fs.readFile("./files_to_be_read/" + fileName, (err, data) => {
    if (err) {
      throw err;
      return;
    } 
    fileCount++;
    printPattern(data);
    if (fileCount == 1) {
      fs.appendFile("./files_to_be_read/" + filesArray[fileCount], data.toString(), (err) => {
        if (err) {
          throw err;
          return;
        }
        readFile(filesArray[fileCount]);
      });
    } 
    if (fileCount == 2) {
      let reversedData = data.toString().split('').reverse().join('');
      fs.appendFile("./files_to_be_read/" + filesArray[fileCount], reversedData, (err) => {
        if (err) {
          throw err;
          return;
        }
        readFile(filesArray[fileCount]);
      });
    } 
    if (fileCount < filesArray.length && fileCount > 2) {
      readFile(filesArray[fileCount]);
    }       
  }); 
}

var printFilesFunction = function (filesArray) {
  readFile(filesArray[0]);
}

var printPattern = function (data) {
  console.log(data.toString());
  console.log(data.toString());
  console.log("=======================");
}

console.log("=======================");
printFilesFunction(filesArray);