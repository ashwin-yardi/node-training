// Sample String .
var string = "u@#d$fkj$#!kds";

// Solution 1: Using String Functions.
function calculateFrequencyUsingString(string){
  var frequency = new Array(26).fill(0);
  for (var i = 0; i < string.length; i++){
  	if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
  		frequency[(string.charCodeAt(i) - 97)]++;
  	}
  }
  return frequency;
}

// Solution 2: using only Arrays and not using String functions.
function calculateFrequencyUsingArrays(string){
  var frequency = new Array(26).fill(0);
  var alphabet_array = ["a" , "b" ,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (var i = 0; i < string.length; i++){
  	for (var j = 0; j < 26 ; j++){
      if(alphabet_array[j] == string[i]){
  				frequency[j]++;
  		}
  	}
  }	  
  var json_output = {};
  for (var i = 0; i < 26; i++){
  	if(frequency[i] > 0){
  		json_output[alphabet_array[i]] = frequency[i];
  	}
  }
  return json_output;
}
