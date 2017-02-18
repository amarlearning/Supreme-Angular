(function() {
	'use strict';

	angular.module('ShoppingList')
	.controller('ItemDetailController', ItemDetailController);

	ItemDetailController.$inject = ['$stateParams', 'items'];

	function ItemDetailController($stateParams, items) {
		var item = items[$stateParams.itemId];

		this.name = item.name;
		this.quantity = item.quantity;
		this.description = item.description;
	};

})();