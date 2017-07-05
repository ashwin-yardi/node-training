// Sample Complex flattened JSON object.
var data = {"flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947};

function unflatten(flatObject){
  var temp_str;
  var unflatObject = {};
  for (obj in flatObject){  
    var temp_object = {};
    temp_str = String(obj);
    var splitted_string = temp_str.split(".");
    // call to form_object function with the copy of reference for unflatObject.
    form_object(unflatObject , splitted_string , flatObject[obj]);
  }   
  return unflatObject;
}

function form_object(unflatObject , splitted_string , value){
  //as copy of reference for unflatobject is sent in this function , changing the value of unflatObject in this function 
  //won't affect the value of original unflat object from the caller function.
  key_length = splitted_string.length -1;
  for(var i = 0 ; i < key_length ; ++i){  
    var key = splitted_string[i];  
    if(!(key in unflatObject )){
      if (splitted_string[i + 1].match(/\d+/g)){
        unflatObject[key] = [];
      }
      else{
        unflatObject[key] = {};
      }
    }
    unflatObject=unflatObject[key];
  }
  // reach out the innermost object in nested Json and then write the value.
  // Last element of the splitted_string is always going to be unique. 
  unflatObject[splitted_string[key_length]] = value;
}

//final function call to unflatten function.
//sample complex nested json object.
var b = {"flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] };


