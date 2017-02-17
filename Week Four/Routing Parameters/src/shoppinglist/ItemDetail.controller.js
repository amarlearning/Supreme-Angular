(function() {
	'use strict';

	angular.module('ShoppingList')
	.controller('ItemDetailController', ItemDetailController);

	ItemDetailController.$inject = ['item'];

	function ItemDetailController(item) {
		this.name = item.name;
		this.quantity = item.quantity;
		this.description = item.description;
	};

})();