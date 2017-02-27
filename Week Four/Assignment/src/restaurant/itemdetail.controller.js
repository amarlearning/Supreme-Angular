(function(){
	'use strict';

	angular.module('data')
	.controller('ItemDetailController', ItemDetailController);

	ItemDetailController.$inject = ['itemDetail'];

	function ItemDetailController(itemDetail) {
		var item = this;

		item.CategoryList = itemDetail.data.menu_items;

		item.$onInit = function() {

			console.log(itemDetail.data);
		
		};
	};

})();