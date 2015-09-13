define(
	[
		"app"
	],
	function(app)
	{
		app.factory('participantFactory', function()
		{
			var participantFactory = function() {
				this.FirstName = "";
				this.LastName = "";
				this.BirthYear = "";
				this.Email = "";
				this.Phonenumber = "";
				this.Grade = "";
				this.IsSleepingOver = false;
				this.Bus = "";
				this.Allergic = "";
				this.TypeOfTraining = "";
			};

			return participantFactory;
		});

		app.controller('home',
			["$scope", "$rootScope", "$state", "participantFactory",
				function($scope, $rootScope, $state, participantFactory)
			{
				if($state.current.name == "home")
					$rootScope.ActiveLang = 'sv';
				else if($state.current.name == "en")
					$rootScope.ActiveLang = 'en';

				$rootScope.ChangeTranslation($rootScope.ActiveLang).then(function() {
					$scope.Fields = [
						{
							className: 'col-md-6',
							type: 'input',
							key: 'ContactPerson',
							templateOptions: {
								label: $scope.Translations.ContactPerson,
								required: true
							}
						},
						{
							className: 'col-md-6',
							type: 'input',
							key: 'Coaches',
							templateOptions: {
								label: $scope.Translations.Coaches,
								required: true
							}
						},
						{
							className: 'col-md-6',
							type: 'input',
							key: 'Phonenumber',
							templateOptions: {
								label: $scope.Translations.Phone,
								required: true
							}
						},
						{
							className: 'col-md-6',
							type: 'input',
							key: 'Email',
							templateOptions: {
								type: 'email',
								label: $scope.Translations.Email,
								required: true
							}
						},
						{
							className: 'col-md-12',
							type: 'input',
							key: 'Club',
							templateOptions: {
								label: $scope.Translations.Club,
								required: true
							}
						},
						{
							className: 'col-md-12',
							type: 'textarea',
							key: 'Other',
							templateOptions: {
								label: $scope.Translations.OtherInformation
							}
						}
					];
					$scope.ParticipantFields = [
						{
							template: '<div class="col-md-12 divider"></div>'
						},
						{
							className: 'col-md-4',
							type: 'input',
							key: 'FirstName',
							templateOptions: {
								placeholder: $rootScope.Translations.FirstName
							}
						},
						{
							className: 'col-md-4',
							type: 'input',
							key: 'LastName',
							templateOptions: {
								placeholder: $rootScope.Translations.LastName
							}
						},
						{
							className: 'col-md-4',
							type: 'input',
							key: 'BirthYear',
							templateOptions: {
								placeholder: $rootScope.Translations.BirthYear,
								type: 'number'
							}
						},
						{
							className: 'col-md-6',
							type: 'input',
							key: 'Email',
							templateOptions: {
								placeholder: $rootScope.Translations.Email,
								type: 'email'
							}
						},
						{
							className: 'col-md-6',
							type: 'input',
							key: 'Phonenumber',
							templateOptions: {
								placeholder: $rootScope.Translations.Phone,
								type: 'number'
							}
						},
						{
							className: 'col-md-3',
							type: 'select',
							key: 'Grade',
							templateOptions: {
								label: $rootScope.Translations.Grade,
								options: [
									{
										"name": "5Kyu",
										"group": "Kyu",
										"value": 1
									},
									{
										"name": "4Kyu",
										"group": "Kyu",
										"value": 2
									},
									{
										"name": "3Kyu",
										"group": "Kyu",
										"value": 3
									},
									{
										"name": "2Kyu",
										"group": "Kyu",
										"value": 4
									},
									{
										"name": "1Kyu",
										"group": "Kyu",
										"value": 5
									},
									{
										"name": "1dan",
										"group": "Dan",
										"value": 6
									},
									{
										"name": "2dan",
										"group": "Dan",
										"value": 7
									},
									{
										"name": "3dan",
										"group": "Dan",
										"value": 8
									},
									{
										"name": "4dan",
										"group": "Dan",
										"value": 9
									},
									{
										"name": "5dan",
										"group": "Dan",
										"value": 10
									}
								]
							}
						},
						{
							className: 'col-md-3',
							type: 'select',
							key: 'Bus',
							templateOptions: {
								label: $rootScope.Translations.BusRide,
								options: [
									{
										"name": $rootScope.Translations.No,
										"value": 1
									},
									{
										"name": "Göteborg",
										"value": 2
									},
									{
										"name": "Stockholm",
										"value": 3
									}
								]
							}
						},
						{
							className: 'col-md-3',
							type: 'select',
							key: 'TypeOfTraining',
							templateOptions: {
								label: $rootScope.Translations.TrainingClass,
								options: [
									{
										"name": $rootScope.Translations.Competition,
										"value": 1
									},
									{
										"name": $rootScope.Translations.Trainer,
										"value": 2
									},
									{
										"name": $rootScope.Translations.Exerciser,
										"value": 3
									},
									{
										"name": $rootScope.Translations.Child,
										"value": 4
									}
								]
							}
						},
						{
							className: 'col-md-3',
							type: 'textarea',
							key: 'Allergic',
							templateOptions: {
								label: $rootScope.Translations.Allergic
							}
						},
						{
							className: 'col-md-12',
							type: 'checkbox',
							key: 'IsSleepingOver',
							templateOptions: {
								label: $rootScope.Translations.SleepOver
							}
						}
					];
				});

				$scope.Form = {
					ContactPerson: "",
					Coaches: "",
					Phonenumber: "",
					Email: "",
					Club: "",
					Other: "",
					Participants: []
				};

				$scope.AddParticipant = function() {
					$scope.Form.Participants.push(new participantFactory());
				};

				$scope.SubmitForm = function() {
					if ($scope.form.$valid) {
						console.log(JSON.stringify($scope.Form), null, 2);
					}
				};
			}]);
	}
);