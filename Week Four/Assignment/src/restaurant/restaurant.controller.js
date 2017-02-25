(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('RestaurantCategoryController', RestaurantCategoryController);

	RestaurantCategoryController.$inject = ['cat'];

	function RestaurantCategoryController(cat) {
		var rest = this;

		rest.catList = cat.data;
	};

})();