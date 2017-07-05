//Sample Complex Nested JSON Object.
data = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }        

function flatten(unflatObject){ 
  var flattened_json = {};
  function next_object(object , prefix_string){
    if(typeof object == 'object'){
        if(Array.isArray(object)){  
          //Check if Array.
          for(var i = 0; i < object.length; i++){
              next_object(object[i], prefix_string + "." + i);    
          }
          if (object.length == 0){
              flattened_json[prefix_string] = [];
          }
      }  
      else{   
        //Check if Object.
        for (var obj in object){        
            next_object(object[obj], prefix_string ? prefix_string + "." + obj : String(obj));
        }
      }   
    }
    else{
      flattened_json[prefix_string] = object;
    }
  }
  next_object(unflatObject, "");
  return flattened_json;
}

flatten(data);

