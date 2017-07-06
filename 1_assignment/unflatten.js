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

function formObject (unflatObject, splittedString, value) {
  var keyLength = splittedString.length - 1;
  for (var i = 0 ; i < keyLength ; ++i) {  
    var key = splittedString[i];  
    if (!(key in unflatObject )) {
      if (splittedString[i + 1].match(/\d+/g)) {
        unflatObject[key] = [];
      } else {
        unflatObject[key] = {};
      }
    }
    unflatObject = unflatObject[key];
  } 
  unflatObject[splittedString[keyLength]] = value;
}



