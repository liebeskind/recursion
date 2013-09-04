// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
function stringifyJSON(obj) {
		
		if(obj != undefined){
			if (obj.constructor === Object){
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
			} else if (obj.constructor === Array){
				var result = "[";
				for(var i=0;i<obj.length;i++)
				{
					if(i>0) result += ",";
					result += stringifyJSON(obj[i]);
				}
				result += "]"
				return result;
			} else if (obj.constructor === String){
				return ('"' + obj + '"');
			} else {
				return obj.toString();
			}
		} else {
		return 'null';
		}
	};