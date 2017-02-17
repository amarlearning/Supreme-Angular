(function() {
	'use strict';

	angular.module('RoutingController')
	.controller('shoppingListController', shoppingListController);

	shoppingListController.$inject = ['items'];

	function shoppingListController(items) {
		var list = this;

		list.items = items;

		/*

		list.$onInit = function() {

			serviceMethod.getItems()
			.then(function(result) {
				list.items = result
			});
		};

		*/

	};

})();