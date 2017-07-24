function calculateFrequencyUsingString (string) {
  var jsonOutput = {};
  for (let i = 0; i < string.length; i++) {
    var charAsciiValue = string.charCodeAt(i);
    if (charAsciiValue >= 97 && charAsciiValue <= 122) {
      let key = string[i];
      jsonOutput[key] = jsonOutput[key] + 1 || 1;
    }
  }
  return jsonOutput;
}
  
function calculateFrequencySimplerLogic (string) {
  var jsonOutput = {};
  var flag = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/i)) {
      let key = string[i];
      jsonOutput[key] = jsonOutput[key] + 1 || 1;
    }
  }
  return jsonOutput;
}