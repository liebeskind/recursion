/// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	var firstNode = document.body.childNodes[0];

	var workHorse = function(node){
		if (node.nodeType === 1){
			var nodeClass = node.classList;
			if (nodeClass.contains(className)){
				results.push(node);
			}
		}
		while (node){
		workHorse(node.nextSibling)
		}
		return results;
	}

	workHorse(firstNode);
};
