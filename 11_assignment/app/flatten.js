module.exports = function (unflatObject) { 
  if (typeof unflatObject != 'object') {
    throw new Error("Invalid Arguments.");
  }
  let flattenedJson = {};
  function nextObject (object, prefixString) {
    if (typeof object == 'object' && Array.isArray(object)) {  
      for (let i = 0; i < object.length; i++) {
        nextObject(object[i], prefixString + "." + i);    
      }
      if (object.length == 0) {
        flattenedJson[prefixString] = [];
      }
    } 
    if (typeof object == 'object' && !Array.isArray(object)) {
      for (let obj in object) {        
        nextObject(object[obj], prefixString ? prefixString + "." + obj : obj);
      }        
    } 
    if (typeof object != 'object') {
      flattenedJson[prefixString] = object;
    }
  }
  nextObject(unflatObject, "");
  return flattenedJson;
}