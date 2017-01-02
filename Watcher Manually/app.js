(function() {
	'use strict';
	
	angular.module('watcherManually', [])
	.controller('nameController', watchController);

	watchController.$inject = ["$scope"];

	function watchController($scope) {

		$scope.countOnce = 0;
		$scope.counting = 0;

		$scope.watchersCount = function () {
			console.log("# of watchers: "+ $scope.$$watchersCount);
		};

		$scope.onceCounter = function() {
			$scope.countOnce = 1;
		};

		$scope.upCounter = function () {
			$scope.counting++;			
		};

		$scope.$watch('countOnce', function(newvalue, oldvalue) {
			console.log("old value: "+ oldvalue);
			console.log("new value: "+ newvalue);
		});

		$scope.$watch('counting', function(newvalue, oldvalue) {
			console.log("Increment oldvalue : " + oldvalue);
			console.log("Increment newvalue : " + newvalue);
		});

		$scope.$watch(function() {
			console.log("Digest loop fired!");
		});

	};

})();