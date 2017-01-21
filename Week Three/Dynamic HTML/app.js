(function(){
	'use strict';

	angular.module('shoppingListDynamicHtml', [])
	.controller('shoppingListControllerOne', shoppingListFunctionOne)
	.controller('shoppingListControllerTwo', shoppingListFunctionTwo)
	.factory('customFactoryService', customFactoryService)
	.directive('shopingList', shopingList);

	function shopingList() {
		var ddo = {
			templateUrl : 'listitem.html',
			scope : {
				list : '=myList',
				title : '@title'
			}
		};
		return ddo;
	};

	shoppingListFunctionOne.$inject = ['customFactoryService'];
	function shoppingListFunctionOne(customFactoryService) {
		var list = this;

		list.name = "";
		list.quantity = "";
		
		var serviceFunction = customFactoryService();
		
		list.itemlist = serviceFunction.getItemList();

		list.title = "Shoping List #1 ( " + list.itemlist.length + " items )";

		list.addItem = function() {
			try {
				serviceFunction.addItem(list.name, list.quantity);
				list.title = "Shoping List #1 ( " + list.itemlist.length + " items )";
			} catch(error) {
				list.error = error.message;
			}
		};

		list.removeItem = function(index) {
			serviceFunction.removeItem(index);
			list.title = "Shoping List #1 ( " + list.itemlist.length + " items )";
		};
	};


	shoppingListFunctionTwo.$inject = ['customFactoryService'];
	function shoppingListFunctionTwo(customFactoryService) {
		var list = this;

		list.name = "";
		list.quantity = "";

		var serviceFunction = customFactoryService(3);

		list.addItem = function() {
			try {
				serviceFunction.addItem(list.name, list.quantity);
			} catch(error) {
				list.error = error.message;
			}
		};

		list.itemlist = serviceFunction.getItemList();

		list.removeItem = function(index) {
			serviceFunction.removeItem(index);
		};
	};

	function serviceFunction(maxItem) {
		var service = this;
		var list = [];

		service.addItem = function (itemname, quantity) {
			if(maxItem === undefined || (maxItem !== undefined && list.length < maxItem)) {
				var item = {
					name : itemname,
					quantity : quantity
				};

				list.push(item);
			} else {
				throw new Error("No more Items allowed!");
			}
		};

		service.getItemList = function() {
			return list;
		};

		service.removeItem = function(index) {
			list.splice(index, 1)
		};
	};

	function customFactoryService() {
		var factory = function(maxItem){
			return new serviceFunction(maxItem);
		};

		return factory;
	};


})();