(function() {
	'use strict';

	angular.module('RoutingController')
	.service('serviceMethod', serviceMethod);

	serviceMethod.$inject = ['$timeout', '$q'];

	function serviceMethod($timeout, $q) {
		var service = this;

		var shoppingList = [
			{
				name : 'Chips',
				quantity : 10
			},
			{
				name : 'Chocolate',
				quantity : 2
			},
			{
				name : 'Pizza',
				quantity : 100
			}
		];

		service.getItems = function() {
			var defered = $q.defer();

			$timeout(function() {
				defered.resolve(shoppingList);
			}, 1000);

			return defered.promise;
		};

	};

})();