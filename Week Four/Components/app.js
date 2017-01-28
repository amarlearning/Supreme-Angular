(function(){
	'use strict';

	angular.module('shoppingListComponentApp', [])
	.controller('shoppingListController', shoppingListController)
	.service('serviceMethod', serviceMethod)
	.component('shoppingList', {
		templateUrl : 'shoppingList.html',
		controller : shoppingListDirectiveController,
		bindToController : true,
		bindings : {
			items : '<',
			title : '@',
			onRemove : '&'
		}
	});

	/*function shoppingListDirective() {
		var ddo = {
			templateUrl : 'shoppingList.html',
			scope : {
				items : '<',
				title : '@',
				onRemove : '&'
			},
			controller : shoppingListDirectiveController,
			controllerAs : "coc",
			bindToController : true
		};

		return ddo;
	};*/

	function shoppingListDirectiveController() {
		var coc = this;

		coc.removeItem = function(indexes) {
			coc.onRemove({index : indexes});
		}

		coc.cookieCatch = function() {
			for (var i = 0; i < coc.items.length; i++) {
				var name = coc.items[i].name;
				if(name.toLowerCase().indexOf('cookie') !== -1) {
					return true;
				}
			}
			return false;
		};
	};

	shoppingListController.$inject = ['serviceMethod'];
	function shoppingListController(serviceMethod) {
		var list = this;

		list.itemname = "";
		list.quantity = "";

		list.itemlist = serviceMethod.getItemList();

		list.title = "Shopping List ( " + list.itemlist.length + " ) items";

		list.addItem = function() {
			serviceMethod.addItem(list.itemname, list.quantity);
			list.title = "Shopping List ( " + list.itemlist.length + " ) items";
		};

		list.removeItem = function(index) {
			serviceMethod.removeItem(index);
			list.title = "Shopping List ( " + list.itemlist.length + " ) items";
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

		service.getItemList = function () {
			return list;
		};

		service.removeItem = function(index) {
			list.splice(index, 1);
		};
	};

})();