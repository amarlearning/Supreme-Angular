(function(){
	
	'use strict';

	angular.module('shopingList', [])
	.controller('shopingListController', shopingListController)
	.service('serviceMethod', serviceMethod)
	.directive('itemList', itemList);

	function itemList() {
		var ddo = {
			templateUrl : 'listitem.html',
			scope : {
				items : '<',
				title : '@'
			},
			controller : shoppingListDirectiveController,
			controllerAs : "myList",
			bindToController : true
		};

		return ddo;
	};

	shoppingListDirectiveController.$inject = ['serviceMethod'];
	function shoppingListDirectiveController(serviceMethod) {
		var list = this;
		list.itemList = serviceMethod.getItemList();

		list.cookieInList = function() {
			for (var i = 0; i < list.itemList.length; i++) {
				if(list.itemList[i].name.toLowerCase().indexOf('cookie') !== -1) {
					return true;
				}
			}
			return false;
		};
	};

	shopingListController.$inject = ['serviceMethod'];
	function shopingListController(serviceMethod) {
		var list = this;

		list.itemname = "";
		list.quantity = "";

		list.addItem = function() {
			serviceMethod.addItem(list.itemname, list.quantity);
		};

		list.removeItem = function(index) {
			serviceMethod.removeItem(index);
		};

		list.itemList = serviceMethod.getItemList();

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

})();