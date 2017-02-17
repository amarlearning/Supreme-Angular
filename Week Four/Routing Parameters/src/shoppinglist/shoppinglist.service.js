(function() {
	'use strict';

	angular.module('ShoppingList')
	.service('shoppingListService', shoppingListService);

	shoppingListService.$inject = ['$timeout', '$q'];

	function shoppingListService($timeout, $q) {
		var service = this;

		var shoppingList = [
			{
				name : 'Chips',
				quantity : 10,
				description : 'Chips Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
			},
			{
				name : 'Chocolate',
				quantity : 2,
				description : 'Chips Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
			},
			{
				name : 'Pizza',
				quantity : 100,
				description : 'Chips Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
			}
		];


		service.getItems = function () {
			var defered = $q.defer();

			$timeout(function() {
				defered.resolve(shoppingList);
			}, 1000);

			return defered.promise;
		};

	};

})();