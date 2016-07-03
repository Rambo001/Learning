angular.module("toDoListApp", [])
.controller("mainCtrl",function ($scope) {
	$scope.helloWorld = function(){
		console.log("this is the controller")
	};

	$scope.todos = [
		{"name": "clean the house"},
		{"name": "drink water"},
		{"name": "read a book"},
		{"name": "play violin"},
		{"name": "paint"}
	]

});