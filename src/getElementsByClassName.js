// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	var childNodes = document.body.childNodes;

	if (arguments){
	var args = Array.prototype.slice.call(arguments);
	var thisName = args.pop();
	args = args.join(' ')
		for (var i = 0; i< childNodes.length; i++){
			if (childNodes[i] && childNodes[i].nodeType === 1){
				if (childNodes[i].classList.contains(thisName)){
					results.push(childNodes[i]);
				}
			}
		}
		getElementsByClassName(args)
	}
	return results;
};

//Need to loop through all of the elements in body and, if they have a class equal to className, add them to results 
