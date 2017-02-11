(function() {
	'use strict';

	angular.module('RoutingController')
	.component('shoppingList', {
		templateUrl : 'src/templates/items.template.html',
		controller : ShoppingListComponentController,
		bindings : {
			items : '<'
		}
	});

	function ShoppingListComponentController() {

	};

})();