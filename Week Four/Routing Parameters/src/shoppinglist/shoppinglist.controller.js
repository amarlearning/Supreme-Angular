(function() {
	'use strict';

	angular.module('ShoppingList')
	.controller('shoppingListController', shoppingListController);

	shoppingListController.$inject = ['items'];
	function shoppingListController(items) {
		var list = this;

		list.items = items;
	};
	
})();