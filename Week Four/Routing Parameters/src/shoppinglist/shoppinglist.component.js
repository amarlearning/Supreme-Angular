(function() {
	'use strict';

	angular.module('ShoppingList')
	.component('shoppingLists', {
		templateUrl : 'src/templates/shoppinglist.component.html',
		controller : ShoppingListComponentController,
		bindings : {
			items : '<'
		}
	});

	function ShoppingListComponentController() {
		var ctrl = this;
	};

})();