function calculateFrequencyUsingString (string) {
  var jsonOutput = {};
  for (var i = 0; i < string.length; i++) {
    var charAsciiValue = string.charCodeAt(i);
    if (charAsciiValue >= 97 && charAsciiValue <= 122) {
      var key = string[i];
      if (!jsonOutput.hasOwnProperty(key)) {
        jsonOutput[key] = 1;
      } else {
        jsonOutput[key]++;
      }
    }
  }
  return jsonOutput;
}
  
function calculateFrequencySimplerLogic (string) {
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