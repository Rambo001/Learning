document.querySelector('.grid').addEventListener('click', function(e){

	if(e.target.tagName === 'IMG'){
		var numElements = document.getElementsByTagName('li').length;
		if (numElements > 1 ) {
			var removeTarget = e.target.parentNode;
			removeTarget.parentNode.removeChild(removeTarget);
		}
		else{
			var text = e.target.alt;
			document.querySelector('#art p').innerHTML = "You clicked " + text + ".";
		}
	}

}, false);