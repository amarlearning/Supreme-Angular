(function () {
	'use strict';

	angular.module('BindingApplication', [])
	.controller('bindingController', bindingFunction);

	bindingFunction.$inject = ["$scope"];

	function bindingFunction ($scope) {
		$scope.firstname = "Amar";
		
		// $scope.fullname = "";

		$scope.showNumberofWatchers = function(){
			console.log("# of watchers: "+ $scope.$$watchersCount);
		};

		$scope.newfullname = function() {
			$scope.fullname = $scope.firstname + " Pandey";
		};

		$scope.logfirstname = function() {
			console.log("First name: " + $scope.firstname);
		};

		$scope.logfullname = function() {
			console.log("Full name: " + $scope.fullname);
		};

	};

})();