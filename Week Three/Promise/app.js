(function(){
	'use strict';

	angular.module('shopingListPromiseApp', [])
	.controller('shopingPromiseController', shopingPromiseFucntion)
	.service('servicePromise', servicePromiseFunction)
	.service('weightLossFilterService', weightLossFilterService);

	shopingPromiseFucntion.$inject = ['servicePromise'];

	function shopingPromiseFucntion(servicePromise) {
		var list = this;

		list.itemname = "";
		list.quantity = "";

		list.addItem = function () {
			servicePromise.addItem(list.itemname, list.quantity);
		};

		list.itemlist = servicePromise.getItemList();

		list.removeItem = function(index) {
			servicePromise.removeItem(index);
		};
	};

	servicePromiseFunction.$inject = ['$q', 'weightLossFilterService'];

	function servicePromiseFunction( $q, weightLossFilterService) {
		var service = this;
		var list = [];

		/*

		// Method #1 : Asynchronous Behavior with Promises and $q

		service.addItem = function(itemname, itemquan) {
			var promise = weightLossFilterService.checkname(itemname);

			promise.then(function(result){

				var nextPromise = weightLossFilterService.checkQuantity(itemquan);

				nextPromise.then(function(result){
					var item = {
						name : itemname,
						quantity : itemquan
					};

					list.push(item);
				},
				function(error){
					console.log(error.message);
				});
			}, 
			function(error){
				console.log(error.message);
			});
		};
		*/

		/*	
		
		// Method #2 : Asynchronous Behavior with Promises and $q

		service.addItem = function(itemname, itemquan) {
			var promise = weightLossFilterService.checkname(itemname);

			promise.then(function(response){
				return weightLossFilterService.checkQuantity(itemquan);
			}).then(function(response){
				var item = {
					name : itemname,
					quantity : itemquan
				};

				list.push(item);
			}).catch(function(error){
				console.log(error.message);
			});
		};
		*/

		// Method #3 : Asynchronous Behavior with Promises and $q
		
		service.addItem = function(itemname, itemquan) {
			var namePromise = weightLossFilterService.checkname(itemname);
			var quantityPromise = weightLossFilterService.checkQuantity(itemquan);

			$q.all([namePromise, quantityPromise])
			.then(function(response){
				var item = {
					name : itemname,
					quantity : itemquan
				};

				list.push(item);
			})
			.catch(function(error){
				console.log(error.message);
			});
		};


		service.getItemList = function() {
			return list;
		};

		service.removeItem = function(index) {
			list.splice(index, 1);
		};

	};

	



	weightLossFilterService.$inject = ['$q', '$timeout'];

	function weightLossFilterService( $q, $timeout) {
		var service = this;

		service.checkname = function(name) {
			var deferred = $q.defer();

			var result = {
				message : ""
			};

			$timeout(function(){
				
				if(name.toLowerCase().indexOf("burger") === -1) {
					deferred.resolve(result)
				} else {
					result.message = "No more burger to you!";
					deferred.reject(result)
				}
			}, 4000);

			return deferred.promise;
		};

		service.checkQuantity = function(quantity) {

			var deferred = $q.defer();

			var result = {
				message : ""
			};

			$timeout(function(){
				
				if(quantity < 6) {
					deferred.resolve(result)
				} else {
					result.message = "Thats too much!";
					deferred.reject(result)
				}

			}, 1000);


			return deferred.promise;
		};

	};

})();








