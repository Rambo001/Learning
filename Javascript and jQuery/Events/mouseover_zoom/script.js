document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {

  	var myElement = document.createElement('div');
  	myElement.className = 'preview';
  	e.target.parentNode.appendChild(myElement);

  	var myImg = document.createElement('img');
  	var locImg = e.target.src;
  	myImg.src = locImg.substr(0, locImg.length-7) + '.jpg';
  	myElement.appendChild(myImg);

  	e.target.addEventListener('mouseout', function handler(d) {
  		var myNode = d.target.parentNode.querySelector('div.preview');
  		myNode.parentNode.removeChild(myNode);
  		e.target.removeEventListener('mouseout', handler, false);
  	}, false);

  } // check to see that I clicked on IMG only
}, false); // click event