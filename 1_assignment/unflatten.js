
data= {"i.am.not.so.flat": true , 
		"i.am.not.so.unflat": false}

function unflatten(flatObject)
{
	var temp_str;
	var unflatObject={};
	for (obj in flatObject)
	{	
		var temp_object={};
		temp_str = String(obj);
		var splitted_string = temp_str.split(".");

		// call to form_object function with the copy of reference for unflatObject.
		form_object(unflatObject , splitted_string , flatObject[obj]);
		//console.log(JSON.stringify(unflatObject));
	}		
		

	return unflatObject;
	//console.log(JSON.stringify(unflatObject));
}


function form_object(unflatObject , splitted_string , value)
{
	key_length = splitted_string.length -1;
	//console.log(JSON.stringify(unflatObject));
	for(var i =0 ; i<key_length ; ++i)
	{	
		var key = splitted_string[i];  
		if(!(key in unflatObject ))
		{
			if (splitted_string[i+1].match(/\d+/g))
			{
				unflatObject[key] = [];
			}
		
			else
			{
				unflatObject[key]={};
			}
		}
		unflatObject=unflatObject[key];

	}
	unflatObject[splitted_string[key_length]] = value;
	
}

a= {
	"temp" : "abc" , 
	"t2"	: "22"
}

var b={ "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }

// if (!("flat" in b ))
// {
// 	console.log("Full petlay");
// }

// var c="dates.0.day"
// if (c.match(/\d+/g))
// {
// 	console.log("Full petlay");
// }

//console.log(b["i"]["am"]["not"]["so"]);
unflatten(b);