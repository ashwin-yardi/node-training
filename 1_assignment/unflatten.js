function unflatten (flatObject) {
  var tempStr;
  var unflatObject = {};
  for (obj in flatObject) {  
    tempStr = String(obj);
    var splittedString = tempStr.split(".");
    formObject(unflatObject, splittedString, flatObject[obj]);
  }   
  return unflatObject;
}

function formObject (referencedUnflatObject, splittedString, value) {
  var keyLength = splittedString.length - 1;
  for (var i = 0; i < keyLength; ++i) {  
    var key = splittedString[i];  
    if (!referencedUnflatObject.hasOwnProperty(key)) {
      if (splittedString[i + 1].match(/\d+/g)) {
        referencedUnflatObject[key] = [];
      } else {
        referencedUnflatObject[key] = {};
      }
    }
    referencedUnflatObject = referencedUnflatObject[key];
  } 
  referencedUnflatObject[splittedString[keyLength]] = value;
}