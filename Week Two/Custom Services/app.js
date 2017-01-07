(function() {
	'use strict';

	angular.module('shopingList', [])
	.controller('controllerCreateList', createListFunction)
	.controller('controllerShowList', showListFunction)
	.service("customService", customService);

	createListFunction.$inject = ["customService"];
	function createListFunction(customService) {
		var createItem = this;

		createItem.itemname = "";
		createItem.quantity = "";

		createItem.addnow = function() {
			customService.addItem(createItem.itemname, createItem.quantity);
			createItem.itemname = "";
			createItem.quantity = "";	
		};

	};

	showListFunction.$inject = ["customService"];
	function showListFunction(customService) {
		var showList = this;
		showList.items = customService.getItem();
		
		showList.remove = function (index) {
			customService.removeItem(index);	
		}
	};

	function customService() {
		var service = this;
		var list = [];

		service.addItem = function(itemname, quan) {
			var item = {
				name : itemname,
				quantity : quan
			};

			list.push(item);
		};

		service.removeItem = function(index) {
			list.splice(index, 1);
		}

		service.getItem = function() {
			return list;
		};
	};

})();