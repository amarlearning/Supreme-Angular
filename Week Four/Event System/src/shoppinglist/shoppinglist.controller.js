(function(){
	'use strict';

	angular.module('shoppingListComponentApp')
	.controller('shoppingListController', shoppingListController);

	shoppingListController.$inject = ['factoryService'];
	function shoppingListController(factoryService) {
		
		var list = this;
		var serviceMethod = factoryService();

		list.itemname = "";
		list.quantity = "";
		list.lastRemoved = "";

		list.addItem = function() {
			serviceMethod.addItem(list.itemname, list.quantity);
		};

		list.removeItem = function(index) {
			list.lastRemoved = "Last removed item was : " + list.itemlist[index].name;
			serviceMethod.removeItem(index);
		};

		list.itemlist = serviceMethod.getItemList();
	};

})();