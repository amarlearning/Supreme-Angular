(function () {
	'use strict';

	angular.module('UpperCaseModule', [])
	.controller('UpperCaseController', ['$scope', '$filter', function($scope, $filter){
		
		$scope.name = "Amar Pandey";

		$scope.UpperCaseFucntion = function () {
			
			var upCase  = $filter('uppercase');
			$scope.name = upCase($scope.name);
		
		};

	}]);

})();