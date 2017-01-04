(function() {
	
	'use strict';

	angular.module('moduleAssignment', ['ngSanitize'])
	.controller("assignmentController", assignmentFucntion)
	.filter("split", splitFilterFunction)
	.filter("emptyStrings", emptyStringsFunction);

	assignmentFucntion.$inject = ["$scope", "splitFilter", "emptyStringsFilter"];

	function assignmentFucntion($scope, splitFilter, emptyStringsFilter) {
		
		$scope.items = "";
		$scope.list = splitFilter($scope.items);

		$scope.evaluateItems = function () {
			var listLength = emptyStringsFilter(splitFilter($scope.items));

			if(listLength == 0) {
				$scope.message = "<div class=\"alert alert-warning\" role=\"alert\"><strong>Please enter data first.</strong></div>";
			}

			else if(listLength <= 3) {
				$scope.message = "<div class=\"alert alert-success\" role=\"alert\"><strong>Enjoy!</strong></div>";
			}

			else {
				$scope.message = "<div class=\"alert alert-danger\" role=\"alert\"><strong>Too much!</strong></div>";
			}
		};
	};

	function splitFilterFunction() {
		return function (input) {
			var list = input.split(",");
			return list;
		};
	};

	function emptyStringsFunction() {
		return function (list) {
			var length = list.length;
			for (var i = 0; i < list.length; i++) {
				if(list[i] === "" || list[i] === " ")
					length -= 1;
			}
			return length;
		};
	};

})();