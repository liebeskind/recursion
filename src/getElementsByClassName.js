/// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	
	var startingNode = document.body;
	var results = [];
	
	var workHorse = function(node) {
		if (node.nodeType === 1){
			if (node.classList.contains(className)){
				results.push(node);
			}
		}

		if (node.childNodes){
			for (var i = 0; i < node.childNodes.length; i++){
				workHorse(node.childNodes[i]);
			}
		} 
	}
	
	workHorse(startingNode)
	return results;	
};