(function() {
	'use strict';

	angular.module('ShoppingList')
	.config(RouterConfig);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RouterConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url : '/',
			templateUrl : 'src/templates/home.template.html'
		})
		.state('mainlist', {
			url : '/mainlist',
			templateUrl : 'src/templates/mainlist.template.html',
			controller : 'shoppingListController as list',
			resolve  : {
				items : ['shoppingListService', function(shoppingListService) {
					return shoppingListService.getItems();
				}] 
			}
		})
		.state('item', {
			url : '/item/{itemId}',
			templateUrl : 'src/templates/item.template.html',
			controller : 'ItemDetailController as itemdetail',
			resolve  : {
				item : ['$stateParams', 'shoppingListService', function($stateParams, shoppingListService) {
					return shoppingListService.getItems()
					.then(function(items) {
						return items[$stateParams.itemId];
					});
				}] 
			}
		});
	};
	
})();