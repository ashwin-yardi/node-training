function calculateFrequencyUsingString (string) {
  var jsonOutput = {};
  for (var i = 0; i < string.length; i++) {
    var charAsciiValue = string.charCodeAt(i);
    if (charAsciiValue >= 97 && charAsciiValue <= 122) {
      var key = string[i];
      if (!(key in jsonOutput)) {
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
      flag = 0;
    } else {
       flag = 1;
    }
    if (!(key in jsonOutput)) {
      jsonOutput[key] = 1;
    } else if (flag != 1) {
      jsonOutput[key]++;
    }
  }
  return jsonOutput;
}