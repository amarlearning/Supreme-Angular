(function(){
	'use strict';

	angular.module('httpService', [])
	.controller('httpServiceController', httpServiceController)
	.service('httpService', httpService)
	.constant('AppBaseUrl', "http://davids-restaurant.herokuapp.com");

	httpServiceController.$inject = ['httpService'];
	function httpServiceController(httpService) {
		var fun = this;

		var promise = httpService.getCategoryList();
		promise.then(function(response){
			fun.itemlist = response.data;
		})
		.catch(function(error){
			console.log("Something went wrong!");
		});

		fun.getCategoryMenu = function(shortName) {

			var promise = httpService.getCategoryMenu(shortName);
			promise
			.then(function(response){
				console.log(response.data);
			})
			.catch(function(error){
				console.log("Something went wrong!");
			});
		};
	};

	httpService.$inject = ['$http', 'AppBaseUrl'];
	function httpService($http, AppBaseUrl) {
		var service = this;
		service.getCategoryList = function() {
			var response = $http({
				method : 'GET',
				url : (AppBaseUrl + "/categories.json")
			});
			return response;
		};
		service.getCategoryMenu = function(shortName) {
			var response = $http({
				method : 'GET',
				url : (AppBaseUrl + "/menu_items.json"),
				params : {
					category : shortName
				}
			});
			return response;
		};
	};

})();