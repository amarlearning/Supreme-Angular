(function(){
	'use strict';

	angular.module('scopeInheritance', [])
	.controller("parentController", parentFunction)
	.controller("childController", childFucntion)
	.controller("parentControllerTwo", parentFucntionTwo)
	.controller("childControllerTwo", childFucntionTwo);

	/* Using scope */
	parentFunction.$inject = ["$scope"];
	childFucntion.$inject = ["$scope"];

	function parentFunction($scope) {
		$scope.value = 1;
		$scope.pc = this;
		$scope.pc.value = 1; 
	};

	function childFucntion($scope) {
		console.log("Child $scope.value : ", $scope.value);
		console.log("Child $scope : ", $scope);

		$scope.value = 5;
		console.log("** Changed the child $scope.value = 5 **");
		console.log("Child $scope.value : ", $scope.value);
		console.log("Child $scope : ", $scope);

		$scope.pc.value = 2;
		console.log("** Changed the child $scope.pc.value = 2 **");
		console.log("Child $scope.value : ", $scope.value);
		console.log("Child $scope.pc.value : ", $scope.pc.value);
		console.log("Child $scope : ", $scope);		
	};

	/* Using controller as syntax */
	function parentFucntionTwo() {
		var parent = this;
		parent.value = 1;
	};
	function childFucntionTwo() {
		var child = this;
		child.value = 5;
	};

})();