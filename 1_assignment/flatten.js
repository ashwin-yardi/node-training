function flatten(unflatObject) { 
  var flattenedJson = {};
  function nextObject (object, prefixString) {
    if (typeof object == 'object') {
      if (Array.isArray(object)) {  
        for (var i = 0; i < object.length; i++) {
          nextObject(object[i], prefixString + "." + i);    
        }
        if (object.length == 0) {
          flattenedJson[prefixString] = [];
        }
      }  else {   
        for (var obj in object) {        
          nextObject(object[obj], prefixString ? prefixString + "." + obj : obj);
        }
      }   
    } else {
      flattenedJson[prefixString] = object;
    }
  }
  nextObject(unflatObject, "");
  return flattenedJson;
}


