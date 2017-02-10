(function(){
	'use strict';

	angular.module('RoutingApp', ['ui.router'])
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/error');

		$stateProvider.state('tab1', {
			url : '/tab1',
			template : '<p> This is Tab 1 page </p>'
		})
		.state('tab2', {
			url : '/tab2',
			template : '<p> This is Tab 2 page </p>'
		})
		.state('error', {
			url : '/error',
			template : '<p> No such page exist </p>'
		});

	};

})();