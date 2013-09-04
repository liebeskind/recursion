// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
function stringifyJSON(obj) {
		
		if(obj != undefined){
			if (typeof obj === 'array'){
				var result = "[";
				for(var i=0;i<obj.length;i++)
				{
					if(i>0) result += ",";
					result += stringifyJSON(obj[i]);
				}
				result += "]"
				return result;
			} else if (typeof obj === 'string'){
				return ('"' + obj + '"');
			} else if (typeof obj === 'number'){
				return obj.toString(); 		
			} else if (typeof obj === 'object'){
				var holder = [];
				for (prop in obj){
					if (typeof obj[prop] != 'function'){
						if (!isNaN(prop)){
							holder.push(stringifyJSON(obj[prop])); 
						} else {
							holder.push('"'+ prop + '":' + stringifyJSON(obj[prop]));
						}
					}
				}
				if (holder.length>0){
				return "{" + holder.join(",") + "}";
				} else {
					return "{}"
				}
			} else {
				return obj.toString();
			}
		} else {
		return 'null';
		}
	};