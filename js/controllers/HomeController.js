app.controller('HomeController', ['$scope', 'suggestions','comments' function($scope, suggestions, comments) {
	$scope.helloWorld = "Hello, AngularJS!";
	$scope.posts = suggestions.posts;
	$scope.addSuggestion = function() {
		//if input empty, don't submit
		if (!$scope.title || $scope.title === "") {
			return;
		}
		//push suggestion posts in suggestions.js
		$scope.posts.push({
			id: $scope.posts.length +1,
			title: $scope.title,
			upvotes: 0,
			comments: [],
		});
		//after submit, clear input
		$scope.title = '';
	};
	$scope.upVote= function(index) {  
			$scope.posts[index].upvotes += 1; 
		};
}]);