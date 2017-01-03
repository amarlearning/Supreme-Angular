(function(){
	'use strict';

	angular.module('digestFucntion', [])
	.controller('digestController', controllerFucntion);

	controllerFucntion.$inject = ["$scope", "$timeout"];

	function controllerFucntion($scope, $timeout) {
		
		$scope.countvalue = 0;

		/* This is the first method! */

		$scope.onceCout = function() {
			
			setTimeout(function(){

				$scope.$apply(function(){

					$scope.countvalue = 1;
					console.log("working one");

				});

			}, 2000);
		};


		/*
			This is one other method for digest cycle!

		$scope.onceCout = function(){
			
			$timeout(function(){
				
				$scope.countvalue = 1;
				console.log("working one");

			}, 2000);
		};

		*/

		/*
			This is one other method for digest cycle!
	
		$scope.onceCout = function () {
			
			setTimeout(function(){

				$scope.countvalue = 1;
				console.log("working");
				$scope.$digest();

			}, 1000);
		};

		*/
	};
})();