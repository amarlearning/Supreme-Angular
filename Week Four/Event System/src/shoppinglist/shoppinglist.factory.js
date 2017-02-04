(function(){
	'use strict';

	angular.module('shoppingListComponentApp')
	.factory('factoryService', factoryService);

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
	}

	function factoryService() {
		var factory = function() {
			return new serviceMethod();
		}

		return factory;
	};

})();