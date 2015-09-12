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
				this.Grade = "";
				this.IsSleepingOver = false;
				this.Bus = "";
				this.Allergic = "";
				this.TypeOfTraining = "";
			};

			return participantFactory;
		});

		app.factory('participantFields', function() {
				return [
					{
						template: '<div class="col-md-12 divider"></div>'
					},
					{
						className: 'col-md-4',
						type: 'input',
						key: 'FirstName',
						templateOptions: {
							placeholder: 'Förnamn'
						}
					},
					{
						className: 'col-md-4',
						type: 'input',
						key: 'LastName',
						templateOptions: {
							placeholder: 'Efternamn'
						}
					},
					{
						className: 'col-md-4',
						type: 'input',
						key: 'BirthYear',
						templateOptions: {
							placeholder: 'Födelseår',
							type: 'number'
						}
					},
					{
						className: 'col-md-3',
						type: 'select',
						key: 'Grade',
						templateOptions: {
							label: 'Grad',
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
							label: 'Åker buss?',
							options: [
								{
									"name": "Nej",
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
							label: 'Träningsklass',
							options: [
								{
									"name": "Tävling",
									"value": 1
								},
								{
									"name": "Tränare",
									"value": 2
								},
								{
									"name": "Motionär",
									"value": 3
								},
								{
									"name": "Barn",
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
							label: 'Allergi?'
						}
					},
					{
						className: 'col-md-12',
						type: 'checkbox',
						key: 'IsSleepingOver',
						templateOptions: {
							label: 'Sover över?'
						}
					}
				];
			}
		);

		app.controller('home',
			["$scope", "participantFactory", "participantFields", function($scope, participantFactory, participantFields)
			{
				$scope.Form = {
					ContactPerson: "",
					Coaches: "",
					Phonenumber: "",
					Email: "",
					Club: "",
					Other: "",
					Participants: []
				};

				$scope.Fields = [
					{
						className: 'col-md-6',
						type: 'input',
						key: 'ContactPerson',
						templateOptions: {
							label: 'Kontakt person',
							required: true
						}
					},
					{
						className: 'col-md-6',
						type: 'input',
						key: 'Coaches',
						templateOptions: {
							label: 'Coach(er)',
							required: true
						}
					},
					{
						className: 'col-md-6',
						type: 'input',
						key: 'Phonenumber',
						templateOptions: {
							label: 'Telefonnummer',
							required: true
						}
					},
					{
						className: 'col-md-6',
						type: 'input',
						key: 'Email',
						templateOptions: {
							type: 'email',
							label: 'E-post',
							required: true
						}
					},
					{
						className: 'col-md-12',
						type: 'input',
						key: 'Club',
						templateOptions: {
							label: 'Klubb',
							required: true
						}
					},
					{
						className: 'col-md-12',
						type: 'textarea',
						key: 'Other',
						templateOptions: {
							label: 'Övrigt information till arrangörer'
						}
					}
				];
				$scope.ParticipantFields = participantFields;

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