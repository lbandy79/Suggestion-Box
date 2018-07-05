var app = angular.module('SuggestionBox', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 $locationProvider.hashPrefix('');
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
}]);