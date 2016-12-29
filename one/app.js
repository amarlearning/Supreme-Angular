(function () {
	'use strict';

	angular.module("NameCaluclator", [])
	.controller("NameCaluclatorController", function ($scope){
		$scope.name = "";

		$scope.calculateValue = function () {
			var totalNameValue = calculateNameValue($scope.name);
			$scope.totalValue = totalNameValue;
		}

		function calculateNameValue(string) {
			var totalNumericValue = 0;
			for (var i = 0; i < string.length; i++) {
				totalNumericValue += string.charCodeAt(i);
			}

			return totalNumericValue;
		}

	});

})();

