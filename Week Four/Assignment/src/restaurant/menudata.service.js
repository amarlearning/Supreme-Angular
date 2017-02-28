(function(){
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http', '$timeout', '$q'];

	function MenuDataService($http, $timeout, $q) {
		var service = this;

		service.getAllCategories = function() {
			var defered = $q.defer();

			$timeout(function(){
				var response = $http({
					method : 'GET',
					url : ('https://davids-restaurant.herokuapp.com/categories.json')
				});

				defered.resolve(response);

			}, 10);

			return defered.promise;
		}


		service.getItemsForCategory = function(itemId) {

			var defered = $q.defer();

			$timeout(function(){
				
				var response = $http({
					method : 'GET',
					url : ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' +  itemId)
				});

				defered.resolve(response);

			}, 10);

			return defered.promise;

		};

	};

})();