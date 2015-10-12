define(
	[
		"app"
	],
	function(app)
	{
		app.config(
			[
				"$stateProvider",
				"$urlRouterProvider",
				function($stateProvider, $urlRouterProvider)
				{
                    $stateProvider
                        .state('home',
                        {
                            url: "/",
                            templateUrl: "views/home.html",
                            controller: "home"
                        })
						.state('en',
						{
							url: "/en",
							templateUrl: "views/home.html",
							controller: "home"
						})
						.state('thanks',
						{
							url: "/thanks",
							templateUrl: "views/thanks.html",
							controller: "thanks"
						});
                }
			]
        );
	});