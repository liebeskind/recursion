// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	
	if (!results){
	var results = [];
	var childNodes = document.body.childNodes;
	}

	/*var args = arguments[0].toString();
	var newArgs = args.split(" ", 2);
	var thisName = newArgs.shift();
	alert("this name: "+ thisName);
	alert("new args: " + newArgs) */
		
		for (var i = 0; i< childNodes.length; i++){
			if (childNodes[i] && childNodes[i].nodeType === 1){
				if (childNodes[i].classList.contains(className)){
						results.push(childNodes[i]);
				}
			}
		}
		
	return results;
};

//Need to loop through all of the elements in body and, if they have a class equal to className, add them to results 