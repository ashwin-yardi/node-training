module.exports = function (flatObject) {
  if (!typeof flatObject == 'object') {
    throw new Error("Invalid Arguments");
  } 
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
  let keyLength = splittedString.length - 1;
  for (let i = 0; i < keyLength; ++i) {  
    let key = splittedString[i];  
    if (!referencedUnflatObject.hasOwnProperty(key)) {
      referencedUnflatObject[key] = splittedString[i + 1].match(/\d+/g) && [] || {};
    }
    referencedUnflatObject = referencedUnflatObject[key];
  } 
  referencedUnflatObject[splittedString[keyLength]] = value;
}