(function(){
	'use strict';

	var list = [{
			name : "cookies",
			quantity : 10
		},{
			name : "Red Bull",
			quantity : 50
		},{
			name : "Chips",
			quantity : 5
		},{
			name : "Lorem",
			quantity : 20
		},{
			name : "Ipsum",
			quantity : 25
		}];

	angular.module('moduleAssignment', [])
	.controller('toBuyController', toBuyFucntion)
	.controller('boughtController', boughtFucntion)
	.provider('customService', factoryFunction);


	toBuyFucntion.$inject = ['customService'];
	function toBuyFucntion(customService) {
		var toBuy = this;
		toBuy.list = customService.getList();
		toBuy.error = "Everything is bought!";

		toBuy.transfer = function(index) {
			customService.transferItems(index);
		};
	};
	

	boughtFucntion.$inject = ['customService'];
	function boughtFucntion(customService) {
		var bought = this;
		bought.list = customService.getBoughtList();
		bought.error = "Nothing bought yet";
	};
	

	function serviceMethod () {
		var service = this;
		var itemsList = list;
		var boughtList = [];

		service.getList = function() {
			return itemsList;
		};

		service.transferItems = function (index) {
			var bought = itemsList[index];
			itemsList.splice(index, 1);
			boughtList.push(bought);
		};

		service.getBoughtList = function() {
			return boughtList;
		};
	};
	
	function factoryFunction() {
		var provider = this;
		provider.$get = function() {
			return new serviceMethod();
		}
	};
	
})();