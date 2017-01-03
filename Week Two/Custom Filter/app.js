(function () {

	'use strict';

	angular.module('Custom', [])
	.controller('CustomLearning', CustomController)
	.filter("custom", CustomFactoryFilter);

	CustomController.$inject = ["$scope", "customFilter"];

	function CustomController($scope, customFilter) {
		$scope.name = "Lorem ipsum dolor sit amet.";
		var msg = "Lorem ipsum dolor sit amet.";

		$scope.somefunction = function () {
			msg = customFilter(msg);
			return msg;
		}
	};

	function CustomFactoryFilter() {
		return function (input) {
			input = input.replace("Lorem", "Happy");
			return input;
		};
	};

})();