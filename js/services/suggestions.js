app.factory('suggestions', [function() {
    var suggestions = {
        posts: [{
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: []
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: []
            },
            {
                title: 'Sing Bon Jovi Living on a Prayer halfway through meetings',
                upvotes: 3,
                comments: []
            },
        ]
    };
    return suggestions;
}]);