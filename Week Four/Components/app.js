(function(){
	'use strict';

	angular.module('shoppingListComponentApp', [])
	.controller('shoppingListController', shoppingListController)
	.service('serviceMethod', serviceMethod)
	.component('shoppingList', {
		templateUrl : 'shoppingList.html',
		controller : shoppingListComponentController,
		bindings : {
			items : '<',
			title : '@',
			onRemove : '&'
		}
	});

	function shoppingListComponentController() {
		var coc = this;

		coc.remove = function(number) {
			coc.onRemove({ index : number });
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
			this.lastRemoved = "Last item removed was " + this.itemlist[index].name;
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