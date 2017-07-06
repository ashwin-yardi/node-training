// Solution 1: Using String Functions.
function calculateFrequencyUsingString (string) {
  var frequency = new Array(26).fill(0);
  var jsonOutput = {};
  for (var i = 0; i < string.length; i++) {
    var charAsciiValue = string.charCodeAt(i);
  	if (charAsciiValue >= 97 && charAsciiValue <= 122) {
  		frequency[(string.charCodeAt(i) - 97)]++;
  	}
  }
  return frequency;
}

// Solution 2: using only Arrays and not using String functions.
function calculateFrequencyUsingArrays (string) {
  var frequency = new Array(26).fill(0);
  var alphabetArray = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (var i = 0; i < string.length; i++) {
  	for (var j = 0; j < 26 ; j++) {
      if (alphabetArray[j] == string[i]) {
  				frequency[j]++;
  		}
  	}
  }	  
  var jsonOutput = {};
  for (var i = 0; i < 26; i++) {
  	if (frequency[i] > 0) {
  		jsonOutput[alphabetArray[i]] = frequency[i];
  	}
  }
  return jsonOutput;
}

function calculateFrequencySimplerLogic (string) {
  var jsonOutput = {};
  var flag = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/i)) {
      key = string[i];
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
  var keys = Object.keys(jsonOutput);
  keys.sort();
  var sortedJsonOutput = {};
  for (var j = 0; j < keys.length; j++) {
    var tempKey = keys[j];
    sortedJsonOutput[tempKey] = jsonOutput[tempKey];
  }
  return sortedJsonOutput;
}