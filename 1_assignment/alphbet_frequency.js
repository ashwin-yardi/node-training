
string = "u@#d$fkj$#!kds"

function calculateFrequency(string) {
  // Write your code here
  var i=0;
  frequency=new Array(26).fill(0);
  for (i =0; i< string.length ; i++)
  {
  	if (string.charCodeAt(i) >= 97 && string.charCodeAt(i)<=122)
  	{
  		frequency[(string.charCodeAt(i)-97)]++;
  	}
  }
  
  return frequency;
}

function calculateFrequency2(string) {
  // Write your code here
  var i=0;
  var j=0;
  frequency=new Array(26).fill(0);
  alphabet_array=["a" , "b" ,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  for (i =0; i< string.length ; i++)
  {
  	for (j=0; j < 26 ;j++)
  	{


  		{
  			if(alphabet_array[j] == string[i])
  			{
  				frequency[j]++;
  			}
  		}
	}
  }	  

  json_output={}
  for ( i=0;i<26;i++)
  {
  	if(frequency[i]>0)
  	{
  		json_output[alphabet_array[i]]=frequency[i];
  	}
  }
  return json_output;
}

console.log(calculateFrequency2(string));