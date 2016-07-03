window.onload = initAll;
var xhr       = false;
var url       = "students.xml";
var dataArray = new Array();

function initAll () {
	if(XMLHttpRequest){
		xhr = new XMLHttpRequest;
	}
	else if(window.ActiveXObject){
		try{
			xhr = ActiveXObject("Microsoft.XMLHttp");
		}
		catch(e){ }
	}

	if(xhr){
		xhr.onreadystatechange = setDataArray;
		xhr.open("GET", url, true);
		xhr.send(null);
	}
	else{
		alert("Sorry, I couldn't create an XMLHttpRequest");
	}

	var allDivs = document.getElementsByTagName('div');
	for(var i=0; i<allDivs.length; i++){
		allDivs[i].onclick = featureOneDiv;
	}

}

function setDataArray () {
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			if(xhr.responseXML){
				var allData = xhr.responseXML.getElementsByTagName('student');

				for(var i=0; i<allData.length; i++){
					var tempObj = new Object;
					tempObj.firstName    = getVal(allData[i], "firstName");
					tempObj.lastName     = getVal(allData[i], "lastName");
					tempObj.seat         = getVal(allData[i], "seat");
					tempObj.readingGroup = getVal(allData[i], "readingGroup");
					tempObj.lunchPeriod  = getVal(allData[i], "lunchPeriod");

					dataArray[i] = tempObj;
				}
			}
		}
		else{
			alert("There was a problem with the request" + xhr.status);
		}
	}

	function getVal (theData, theTag) {
		return theData.getElementsByTagName(theTag)[0].firstChild.nodeValue;
	}
}

function featureOneDiv (evt) {
	var allDivs = document.getElementsByTagName('div');
	for(var i=0; i<allDivs.length; i++){
		allDivs[i].className = "";
	}

	var theDiv       = (evt) ? evt.target : window.event.srcElement;
	theDiv.className = "pickedDiv";
	var theStudent   = null;


	for (var i=0; i<dataArray.length; i++) {
		if(theDiv.id == dataArray[i].seat){
			theStudent = dataArray[i];
		}
	}

	if(theStudent){
		var studentInfo = document.getElementById('detail');

		var theMsg = "<span id='closeBox'>X</span><h3>";
		theMsg    += theStudent.firstName + " " + theStudent.lastName;
		theMsg    += "</h3>Seat: " + theStudent.seat;
		theMsg    += "<br/>Reading Group: " + theStudent.readingGroup;
		theMsg    += "<br/>Lunch Period: " + theStudent.lunchPeriod;

		studentInfo.style.visibility = "visible";
		studentInfo.innerHTML        = theMsg;
		studentInfo.style.top        = (theDiv.offsetTop-5) + "px";
		studentInfo.style.left       = (theDiv.offsetLeft+35) + "px";
		

		document.getElementById('closeBox').onclick = function(){
			document.getElementById('detail').style.visibility = "hidden";
		}
	}
}