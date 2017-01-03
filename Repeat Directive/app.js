(function(){
	'use strict';

	var shopingListOne = ["Milk", "Shoes", "Lorem", "Ipsum", "Dollar",
						"Random Number", "Cupcake", "Hasta la Vista"];

	var shopingListTwo = [
	{
		name : "Milk",
		quantity: 2000
	},{
		name : "Choco Powder",
		quantity: 50
	},{
		name : "Candies",
		quantity: 300
	},{
		name : "Coursera Cources",
		quantity: 5
	}];

	angular.module('shopingListApp', [])
	.controller("shopingListController", shopingListFucntion);

	shopingListFucntion.$inject = ["$scope"];

	function shopingListFucntion($scope) {
		$scope.shopingListOne = shopingListOne;
		$scope.shopingListTwo = shopingListTwo;

		$scope.addtoList = function () {
			var newelement = {
				name : $scope.addItemName,
				quantity: $scope.addItemQuantity
			}

			$scope.shopingListTwo.push(newelement);
			$scope.addItemName = "";
			$scope.addItemQuantity = "";
		};
	};

})();