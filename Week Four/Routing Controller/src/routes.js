(function(){
	'use strict';

	angular.module('RoutingController')
	.config(RouterConfig);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('mainlist', {
			url : '/mainlist',
			templateUrl : 'src/templates/shoppinglist.template.html',
			controller : 'shoppingListController as list'
		})
		.state('home', {
			url : '/',
			templateUrl : 'src/templates/home.template.html'
		});

	};

})();