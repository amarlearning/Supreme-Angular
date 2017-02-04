(function(){
	'use strict';

	angular.module('shoppingListComponentApp', [])
	.controller('shoppingListController', shoppingListController)
	.factory('factoryService', factoryService)
	.service('weightlossfilterservice', weightlossfilterservice)
	.component('shoppingList', {
		templateUrl : 'shoppinglist.html',
		controller : shoppingListComponentController,
		bindings : {
			items : '<',
			title : '@',
			onRemove : '&'
		}
	})
	.component('loadingIcon', {
		templateUrl : 'loadingIcon.html',
		controller : shoppingListLoadingIcon
	});


	shoppingListLoadingIcon.$inject = ['$rootScope'];
	function shoppingListLoadingIcon($rootScope) {
		var $ctrl = this;

		var listener = $rootScope.$on('shoppingList:processing', function(event, data) {
			console.log('Data : ', data);
			console.log('Event : ', event);

			if(data.on) {
				$ctrl.showImage = true;
			} else {
				$ctrl.showImage = false;
			}
		});

		$ctrl.$onDestroy = function() {
			listener();
		};
	};

	shoppingListComponentController.$inject = ['$rootScope', '$element', '$q', 'weightlossfilterservice'];
	function shoppingListComponentController($rootScope, $element, $q, weightlossfilterservice) {
		var $ctrl = this;
		var totalItem;

		$ctrl.$onInit = function() {
			totalItem = 0;
		};

		$ctrl.$doCheck = function() {
			if($ctrl.items.length !== totalItem) {
				totalItem = $ctrl.items.length;

				$rootScope.$broadcast('shoppingList:processing', {on : true});
				var promise = [];
				for (var i = 0; i < $ctrl.items.length; i++) {
					promise.push(weightlossfilterservice.checkItem($ctrl.items[i].name));
				}

				$q.all(promise)
				.then(function(result) {
					// Remove Cookie Warning
					var warningElem = $element.find('div.error');
					warningElem.slideUp(900);
				})
				.catch(function(result) {
					// Show cookie Warning
					var warningElem = $element.find('div.error');
					warningElem.slideDown(900);
				})
				.finally(function() {
					$rootScope.$broadcast('shoppingList:processing', {on : false});
				});
			}
		};

		$ctrl.remove = function(myIndex) {
			$ctrl.onRemove({index : myIndex});
		};
	};

	shoppingListController.$inject = ['factoryService'];
	function shoppingListController(factoryService) {
		
		var list = this;
		var serviceMethod = factoryService();

		list.itemname = "";
		list.quantity = "";
		list.lastRemoved = "";

		list.addItem = function() {
			serviceMethod.addItem(list.itemname, list.quantity);
		};

		list.removeItem = function(index) {
			list.lastRemoved = "Last removed item was : " + list.itemlist[index].name;
			serviceMethod.removeItem(index);
		};

		list.itemlist = serviceMethod.getItemList();
	};

	weightlossfilterservice.$inject = ['$q', '$timeout'];
	function weightlossfilterservice($q, $timeout) {
		var service = this;

		service.checkItem = function(itemname) {
			var result = {
				message : ""
			};

			var deferred = $q.defer();

			$timeout(function() {
				if(itemname.toLowerCase().indexOf('cookie') === -1) {
					deferred.resolve(result);
				} else {
					result.message = "No, more cookies!";
					deferred.reject(result);
				}
			}, 4000);

			return deferred.promise;
				
		};
	};

	function serviceMethod() {
		var service = this;
		var list = [];

		service.addItem = function(itemname, quantity) {
			var item = {
				name : itemname,
				quantity : quantity
			};

			list.push(item);
		};

		service.removeItem = function(index) {
			list.splice(index, 1);
		};

		service.getItemList = function() {
			return list;
		};
	}

	function factoryService() {
		var factory = function() {
			return new serviceMethod();
		}

		return factory;
	};

})();