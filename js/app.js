var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
	.when('/',{
		controller: "HomeController",
		templateUrl: "js/views/home.html"
	})
	.when('/suggestion/:id',{
		controller: "SuggestionController",
		templateUrl: "js/views/suggestion.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});