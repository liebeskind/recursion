/// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	var startingNode = document.body.children[0];
	var arr = Array.prototype.slice.call(startingNode)

	var workHorse = function(node){
		while (node){
			if (node && node.nodeType === 1){
				var counter = node.classList;
				if (counter){
					if (counter == className){
						results.push(node);
						break;						
					}
				}
			}
			node = node.nextSibling;
			workHorse(node)			
		}
		alert(results);
		return results;
	}
	workHorse(startingNode)
};