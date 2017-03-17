(function() {
	'use strict';

	angular.module('ShoppingApp', [])
	.controller('ShoppingListController', ShoppingListControllerFunction)
	.service('serviceMethod', serviceMethod);

	ShoppingListController.$inject = [];

	function ShoppingListController() {
		var list = this;
	};

	function serviceMethod() {
		var service = this;
		var list = [];

		var maxItemInList = 3;

		service.addItem = function(iname, icount) {
			var item = {
				name : iname,
				count : icount
			};

			if(list.lenght < maxItemInList) {
				list.push(item);
			} else {
				
			}
		};

	};


})();