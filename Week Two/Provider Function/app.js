(function() {
	'use strict';

	angular.module('configProvider', [])
	.controller('shopingListController', shopingListFunction)
	.provider('shopingList', shopingListProvider)
	.config(config);

	config.$inject = ['shopingListProvider'];
	function config(shopingListProvider) {
		shopingListProvider.default.maxItem = 4;
	};

	shopingListFunction.$inject = ['shopingList'];
	function shopingListFunction(shopingList) {
		var listOne = this;

		listOne.name = "";
		listOne.quantity = "";

		listOne.addToList = function () {
			try {
				shopingList.addItem(listOne.name, listOne.quantity);
			} catch(error) {
				listOne.error = error.message;
			}
		};

		listOne.remove = function (index) {
			shopingList.removeItem(index);
			listOne.error = "";
		};

		listOne.itemList = shopingList.getItem();
	};

	function shopingListService(maxItem) {
		var service = this;
		var list = [];

		service.addItem = function(itemname, quantity) {
			var item = {
				name : itemname,
				quantity : quantity
			};

			if((maxItem === undefined) || ((maxItem !== undefined) && list.length < maxItem)) {
				list.push(item);
			} else {
				throw new Error("Maximun # of (" + maxItem + ") reached.");
			}
		};
		
		service.removeItem = function(index) {
			list.splice(index, 1);
		};

		service.getItem = function() {
			return list;
		};
	}

	function shopingListProvider() {
		var provider = this;

		provider.default = {
			maxItem : 5
		};

		provider.$get = function () {
			var shopingList = new shopingListService(provider.default.maxItem);
			return shopingList;
		};
	};

})();