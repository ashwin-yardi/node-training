
// data=	{	temp: "abc",
// 			foo:
// 				{
// 					bar:false
// 				}
// 		}

data = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }		

function flatten(unflatObject)
{	
	flattened_json={};
	function next_object(object , prefix_string)
	{
		if(typeof object == 'object')
		{
			if(Array.isArray(object))
			{	

				//console.log("Array Section");
				for(var i=0;i<object.length;i++)
				{
					next_object(object[i] , prefix_string + "." + i);
					//flattened_json[prefix_string+"."+object+"["+i+"]"]=object[i];	
				}
				
				if (object.length == 0) 
				{
					flattened_json[prefix_string]=[];
				}
			}
			else
			{
				//console.log("Object Section");
				for (var obj in object)
				{		

					// if(prefix_string=="")
					// {
					// 	prefix_string=""+obj;
					// }
					// else
					// {
					// 	prefix_string=prefix_string +"."+obj;
					// }
					next_object(object[obj] , prefix_string ? prefix_string+"."+obj : String(obj));
				}
			}	
		}
		else
		{
		 	flattened_json[prefix_string]=object;
		 	
		}
	}

	next_object(unflatObject , "");
	console.log(flattened_json);

}

a=[1,2,3];
flatten(data);

//console.log(flatten2(data));
//console.log(Object.keys(data));
