module.exports = {

  calculateFrequencyUsingString: function (string) {
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
  },
  calculateFrequencySimplerLogic: function (string) {
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
} 