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
				.service('translationService', function($http) {
					this.GetTranslations = function(lang) {
						return $http.get("/content/translation/" + lang + ".json");
					};
				})
				.run(function($rootScope, $q, translationService, formlyConfig, formlyValidationMessages) {
					formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';
					formlyValidationMessages.addStringMessage('required', 'This field is required');

					$rootScope.ActiveLang = 'sv';

					$rootScope.ChangeTranslation = function(lang) {
						var deferred = $q.defer();
						translationService.GetTranslations(lang).success(function(response) {
							$rootScope.Translations = response;
							$rootScope.ActiveLang = lang;

							deferred.resolve();
						}).error(function() {
							deferred.reject();
						});

						return deferred.promise;
					};

					$rootScope.ChangeTranslation($rootScope.ActiveLang);
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