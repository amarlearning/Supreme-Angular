(function() {
	'use strict';

	angular.module('RoutingController')
	.controller('shoppingListController', shoppingListController);

	shoppingListController.$inject = ['serviceMethod'];

	function shoppingListController(serviceMethod) {
		var list = this;

		list.$onInit = function() {

			serviceMethod.getItems()
			.then(function(result) {
				list.items = result
			});
		};

	};

})();