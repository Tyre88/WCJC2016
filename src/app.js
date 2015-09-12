define(
    [
        "angular",
        "ui-router",
        "ui-bootstrap"
    ],
    function(angular)
    {
		try
		{
			return angular.module("wcjs");
		}
		catch(err)
		{
			return angular.module('wcjs', ['ng', 'ui.router', 'ui.bootstrap', 'formly', 'formlyBootstrap'])
				.run(function(formlyConfig, formlyValidationMessages) {
					formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';
					formlyValidationMessages.addStringMessage('required', 'This field is required');
				})
				.controller('index', ["$scope", "$state", function($scope, $state)
				{
					$state.go("home");
				}])
				.config([
					"$compileProvider",
					"$httpProvider",
					function($compileProvider, $httpProvider)
					{
						$compileProvider.debugInfoEnabled(false);
						$httpProvider.useApplyAsync(true);
					}
				]);
		}
    });