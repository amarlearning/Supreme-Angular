(function() {
	'use strict';

	angular.module('moduleAssignment', [])
	.controller('assignmentController', assignmentController)
	.service('serviceMethod', serviceMethod);

	assignmentController.$inject = ['serviceMethod'];
	function assignmentController(serviceMethod) {
		var menu = this;

		menu.keyword = "";
		menu.itemlist = [];

		menu.emptyMessage = "";

		var promise = serviceMethod.getMenu();
		promise.then(function(response){
			menu.data = response.data.menu_items;
		}).catch(function(error){
			console.log("Network Error! Refresh your page.");
		});

		menu.search = function() {
			menu.itemlist = [];
			menu.keyword = menu.keyword.toLowerCase();
			menu.emptyMessage = "";
			if(menu.keyword !== "") {
				for (var i = 0; i < menu.data.length; i++) {
					if(menu.data[i]['description'].toLowerCase().indexOf(menu.keyword) !== -1) {
						menu.itemlist.push(menu.data[i]);
					}
				}
				if(menu.itemlist.length === 0) {
					menu.emptyMessage = "Nothing found!";
				}
			} else {
				menu.emptyMessage = "Nothing found!";
			}
		};

		menu.removeItem = function(index) {
			menu.itemlist.splice(index, 1);
			if(menu.itemlist.length === 0)
				menu.emptyMessage = "Nothing Left!";
		};
	};

	serviceMethod.$inject = ['$http'];
	function serviceMethod($http) {
		var service = this;

		service.getMenu = function() {
			var response = $http({
				method : 'GET',
				url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
			});
			return response;
		};
	};

})();