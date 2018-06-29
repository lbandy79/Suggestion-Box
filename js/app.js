var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
	.when('/',{
		controller: "HomeController",
		templateUrl: "js/views/home.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});