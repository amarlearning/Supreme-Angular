(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RouterConfig);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function RouterConfig($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		
		$stateProvider.state('home',{
			url : '/',
			templateUrl : 'src/templates/home.template.html'
		})
		.state('categories',{
			url : '/categories',
			templateUrl : 'src/templates/categories.template.html',
			controller : 'RestaurantCategoryController as rest',
			
			resolve : {
				cat : ['MenuDataService', function(MenuDataService)	{
					return MenuDataService.getAllCategories()
				}]
			}
		})
		.state('item', {
			url : '/items/{itemId}',
			templateUrl : 'src/templates/item.template.html',
			controller : 'ItemDetailController as itemdetail',
			resolve : {
				itemDetail : ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.itemId);
				}]
			}
		});
	};

})();