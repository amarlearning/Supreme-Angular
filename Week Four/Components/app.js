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

	shoppingListComponentController.$inject = ['$element'];
	function shoppingListComponentController($element) {
		
		var $ctrl = this;
		var totalItems;

		$ctrl.remove = function(number) {
			$ctrl.onRemove({ index : number });
		}

		$ctrl.cookieCatch = function() {
			for (var i = 0; i < $ctrl.items.length; i++) {
				var name = $ctrl.items[i].name;
				if(name.toLowerCase().indexOf('cookie') !== -1) {
					return true;
				}
			}
			return false;
		};

		$ctrl.$onInit = function () {
			totalItems = 0;
		};

		$ctrl.$onChanges = function(changeObj) {
			console.log(changeObj);
		};

		$ctrl.$doCheck = function () {
			if ($ctrl.items.length !== totalItems) {
				
				console.log("# of items changed. Checking for Cookies!");
				totalItems = $ctrl.items.length;
				
				if ($ctrl.cookieCatch()) {
					console.log("Oh, NO! COOKIES!!!!!");
					var warningElem = $element.find('div.error');
					warningElem.slideDown(900);
				}
				else {
					console.log("No cookies here. Move right along!");
					var warningElem = $element.find('div.error');
					warningElem.slideUp(900);
				}
			}
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