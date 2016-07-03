alert("Hi");
var words = ["remember", "umbrella", "bottle", "rescuer", "platform", "broadcast", "intelligent"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = new Array();
for(var i = 0; i < word.length; i++){
	answerArray[i] = "_";
}	
var remainingLetters = word.length;
var chances = 20;
alert("You only have 20 chances");


while(remainingLetters > 0){
	for(var k = 0;k < word.length;k++){
		while(answerArray[k] === "_" && chances > 0){
			alert(answerArray.join(" "));

			var guess = prompt("Guess an word or click cancel to stop playing...");
			if(guess === null)
				break;
			else if(guess.length !== 1)
				alert("Please enter a single letter");
			else{
				for(var j = 0; j < word.length; j++){
					if((guess || toLowerCase(guess)) === word[j]){
						answerArray[j] = guess;
						remainingLetters--;
					}
				}
			chances--;
			}
			alert("You have " + chances + " chance(s) left");
		}
	}
}

if(remainingLetters !== 0)
	alert("Sorry! The answer was " + word);
else{
	alert(answerArray.join(" "));
	alert("Good job! The answer was " + word);
}