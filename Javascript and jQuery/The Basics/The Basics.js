alert("Hello, world");
alert("I am RD aka aWeSoMeNeSs"); // gives output a dialog box 

var foo = "Rambo007", //string
	fooOne = 17, //number
	fooTwo = ["apple", "oranges", "bananas"], //array
	fooThree = true, //boolean
	num ="14", //string
	numFloat = "3.14"; //string

var num = parseInt(num); // string becomes number

alert(num); 

fooTwo.push("strawberries");
alert(fooTwo); //pushes a variable to the end of an array

fooTwo.pop();
alert(fooTwo); //pops the end element of an array 

var fooTwo1 = ["strawberries", "blueberries", "mango", "jackfruit", "watermelon"],
	fruits = fooTwo.concat(fooTwo1), //joins fooTwo1 at the end of fooTwo and puts it into fruits
	fruits1 = fruits.join(", "); //creates a joining operator(the one in the double quotes) between the array elements
	fruits2 = fruits.reverse(); //reverses the elements in an array
	fruits3 = fruits.sort(); //sorts the elements according to the order in this case alphabetical since we didn't specify any method
alert(fruits3);  

var numFloat = parseFloat(numFloat,10); //converts string-float to a number-float in the decimal system
alert(numFloat); 

var add = function(num1, num2){
	
	var mul = function(num3, num4){
		return num3 * num4;
	}
	alert("Product is " + mul(num1, num2));
	
	return num1 + num2; //return should always be the last statement coz function terminates with return
};

alert("Addition is " + add(2, 3)); 

var teacher = new Object(); //creating an object old method

teacher.firstName = "Jeremy"; //defining its properties
teacher.lastName ="McPeak";
teacher.getFullName = function(){ //defining its methods
	return "The one who taught me Javascript was " + this.firstName +" " + this.lastName;
}; //this refers to this particular object 

var teacher = { // creating an object easier way
	firstName : "Jeremy",
	lastName : "McPeak",
	getFullName : function() {
		return "The one who taught me Javascript was " + this.firstName +" " + this.lastName;
	}
};

alert(teacher.getFullName()); //function so use() 

var website = (prompt("Which one do you prefer?Google or Yahoo...We will take you there")).toUpperCase(); //converting thee option entred to caps and saving it in website

if(website === "GOOGLE"){
	location = "https://www.google.com"; //takes to the specified urlhttp://www.motachashma.com/scholarships/world-handwriting-contest.php
}

else if(website === "YAHOO"){
	location = "https://www.yahoo.com"; 
}

else{
	alert("Wrong option.Stay here :P"); //if-else statement
}

var fNumbers = []; //assigning an empty array

for(var i = 0; i < 10; i++){
	fNumbers.push(i); //pushing elements to the array
}

alert(fNumbers); //for loop

var wNumbers = [];
var	j = 0;

while(j < 10){
	wNumbers.push(j);
	j++;
}

alert(wNumbers); //while loop

var dNumbers = [];
var k = 0;

do{
	dNumbers.push(k); //runs the loop once before checking the condition
	k++;
}while(k < 10);

alert(dNumbers); //do-while loop
