module.exports = function (string) {
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