(function(){

	'use strict';

	angular.module('customFactory', [])
	.controller('shopingListOneController', shopingListOneFunction)
	.controller('shopingListTwoController', shopingListTwoFunction)
	.factory('customFactoryService', customFactoryService);

	shopingListOneFunction.$inject = ['customFactoryService'];
	function shopingListOneFunction(customFactoryService) {
		var listOne = this;

		listOne.name = "";
		listOne.quantity = "";

		var serviceMethods = customFactoryService();

		listOne.addToList = function() {
			serviceMethods.addItem(listOne.name, listOne.quantity);
		};

		listOne.itemList = serviceMethods.getItem();

		listOne.remove = function(index) {
			serviceMethods.removeItem(index);
		}
	};

	shopingListTwoFunction.$inject = ['customFactoryService'];
	function shopingListTwoFunction(customFactoryService) {
		var listTwo = this;

		listTwo.name = "";
		listTwo.quantity = "";

		var serviceMethods = customFactoryService(3);

		listTwo.addToList = function() {
			try {
				serviceMethods.addItem(listTwo.itemname, listTwo.quantity);
			} catch(error) {
				listTwo.error = error.message;
			}
		};

		listTwo.itemList = serviceMethods.getItem();

		listTwo.remove = function(index) {
			serviceMethods.removeItem(index);
			listTwo.error = "";
		};

	};

	function shopingListService(maxItem) {
		var service = this;
		var list = [];

		service.addItem = function(itemname, quantity) {
			var item = {
				name: itemname,
				quantity : quantity
			};

			if(maxItem === undefined || ((maxItem !== undefined) && (maxItem > list.length)) ) {
				list.push(item);
			} else {
				throw new Error("Maximun # of (" + maxItem + ") reached.");
			}
		};
		
		service.removeItem = function (index) {
			list.splice(index, 1);
		};

		service.getItem = function () {
			return list;
		};
	};

	function customFactoryService() {
		var factory = function (maxItem) {
			return new shopingListService(maxItem);
		};
		return factory;
	};

})();