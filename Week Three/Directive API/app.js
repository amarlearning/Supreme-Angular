(function(){
	'use strict';

	angular.module('shoppingListDirective', [])
	.controller('shoppingListController', shoppingListController)
	.factory('serviceFactory', serviceFactory)
	.directive('shopingList', shopingList);

	function shopingList() {
		var ddo = {
			templateUrl : 'listitem.html',
			scope : {
				items : '<',
				title : '@title',
				badRemove : '=',
				onRemove : '&'
			},
			controller : shoppingListDirectiveController,
			controllerAs : 'list',
			bindToController : true
		};

		return ddo;
	};

	shoppingListDirectiveController.$inject = ['serviceFactory'];
	function shoppingListDirectiveController(serviceFactory) {
		var list = this;

		var serviceMethods = serviceFactory();
		list.items = serviceMethods.getItemList();

		list.checkCookie = function() {
			for (var i = 0; i < list.items.length; i++) {
				if(list.items[i].name.toLowerCase().indexOf('cookie') !== -1) {
					return true;
				}
			}
			return false;
		};
	};

	shoppingListController.$inject = ['serviceFactory'];
	function shoppingListController(serviceFactory) {
		var list = this;

		list.itemname = "";
		list.quantity = "";

		var serviceMethod = serviceFactory();

		list.itemList = serviceMethod.getItemList();

		list.title = "Shopping List ( " +  list.itemList.length + " items)";

		list.addItem = function() {
			serviceMethod.addItem(list.itemname, list.quantity);
			list.title = "Shopping List ( " +  list.itemList.length + " items)";
		};

		list.removeItem = function(index) {
			console.log("this is : ", this);
			this.lastRemoved = "Last item removed was " + this.itemList[index].name;
			list.title = "Shopping List ( " +  list.itemList.length + " items)";
			serviceMethod.removeItem(index);
		};
	};


	function serviceMethod() {
		var service = this;
		var list = [];

		service.addItem = function(itemname, quantity) {
			var item = {
				name : itemname,
				quantity : quantity
			};

			list.push(item);
		};

		service.removeItem = function(index) {
			list.splice(index, 1);
		};

		service.getItemList = function() {
			return list;
		};
	};


	function serviceFactory() {

		var factory = function() {
			return new serviceMethod();
		};

		return factory;
	};

})();