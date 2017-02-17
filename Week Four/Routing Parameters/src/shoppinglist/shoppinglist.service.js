(function() {
	'use strict';

	angular.module('ShoppingList')
	.service('shoppingListService', shoppingListService);

	shoppingListService.$inject = ['$timeout', '$q'];

	function shoppingListService($timeout, $q) {
		var service = this;

	  	// List of shopping items
		var items = [];

	  	// Pre-populate a no cookie list
		items.push({
			name: "Sugar",
			quantity: "2 bags",
			description: "Sugar used for baking delicious umm... baked goods."
	  	});
		items.push({
			name: "flour",
			quantity: "1 bags",
			description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
		});
		items.push({
			name: "Chocolate Chips",
			quantity: "3 bags",
			description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
	  	});


		service.getItems = function () {
			var defered = $q.defer();

			$timeout(function() {
				defered.resolve(items);
			}, 1000);

			return defered.promise;
		};

	};

})();