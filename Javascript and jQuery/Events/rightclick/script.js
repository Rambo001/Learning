document.querySelector('.grid').addEventListener('contextmenu', function(e) {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {

    //creating a div element to put the img in
  	var myElement = document.createElement('div');
  	myElement.className = 'preview';
  	e.target.parentNode.appendChild(myElement);

    //creating img element and appending to div
  	var myImg = document.createElement('img');
  	var locImg = e.target.src;
  	myImg.src = locImg.substr(0, locImg.length-7) + '.jpg'; // changing the source to the desired name

    myElement.style.left = e.offsetX + 15 + 'px';
    myElement.style.top = e.offsetY + 15 + 'px';

  	myElement.appendChild(myImg);

  	e.target.addEventListener('mouseout', function handler(d) {
  		var myNode = d.target.parentNode.querySelector('div.preview');
  		myNode.parentNode.removeChild(myNode);
  		e.target.removeEventListener('mouseout', handler, false);//removing the mouseout event to avoid event queue
  	}, false);//removing the bigger image when mouseout

    e.target.addEventListener('mousemove', function(f) {
      myElement.style.left = f.offsetX + 15 + 'px';
      myElement.style.top = f.offsetY + 15 + 'px';
    }, false);

  } // check to see that I clicked on IMG only
}, false); // click event