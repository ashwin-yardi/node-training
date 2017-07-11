exports.unflatten = function (flatObject) {
  var tempStr;
  var unflatObject = {};
  for (obj in flatObject) {  
    tempStr = String(obj);
    var splittedString = tempStr.split(".");
    formObject(unflatObject, splittedString, flatObject[obj]);
  }   
  return unflatObject;
}

function formObject (referencedunflatObject, splittedString, value) {
  var keyLength = splittedString.length - 1;
  for (var i = 0; i < keyLength; ++i) {  
    var key = splittedString[i];  
    if (!(key in referencedunflatObject)) {
      if (splittedString[i + 1].match(/\d+/g)) {
        referencedunflatObject[key] = [];
      } else {
        referencedunflatObject[key] = {};
      }
    }
    referencedunflatObject = referencedunflatObject[key];
  } 
  referencedunflatObject[splittedString[keyLength]] = value;
}