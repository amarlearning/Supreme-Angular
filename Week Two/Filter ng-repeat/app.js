// Some of the examples of JavaScript filter.

// var Numbers = [1,2,3,4,5,6,7,8,9,10];

// var FilteredNumberArray = Numbers.filter(function(value){
// 	return value > 5;
// });

// console.log(FilteredNumberArray);

var shopingListOne = ["Milk Bismol", "Shoes", "Lorem Bismol", "Ipsum", "Dollar",
					"Random Number", "Cupcake Bismol", "Hasta la Vista"];

// var searchWord = "Bismol";

// var FilteredShoppingList = shopingListOne.filter(function(value){
// 	if(value.indexOf(searchWord) !== -1) {
// 		return value;
// 	}
// });

// console.log(FilteredShoppingList);


// Now let's see how dsdsangular filter works.

(function(){
	'use strict';

	angular.module('FilterApp', [])
	.controller("FilterController", FilterFunctionController);

	FilterFunctionController.$inject = ['$scope'];

	function FilterFunctionController($scope) {
		$scope.shopingListOne = shopingListOne;
	};

})();
