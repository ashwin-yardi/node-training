module.exports = function (string) {
  var jsonOutput = {};
  var flag = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/i)) {
      var key = string[i];
      if (!jsonOutput.hasOwnProperty(string[i])) {
        jsonOutput[key] = 1;  
      } else {
        jsonOutput[key]++;
      }
    }
  }
  return jsonOutput;
}