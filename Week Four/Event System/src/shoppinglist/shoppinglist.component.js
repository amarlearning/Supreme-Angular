(function(){
	'use strict';

	angular.module('shoppingListComponentApp')
	.component('shoppingList', {
		templateUrl : 'src/shoppinglist/shoppinglist.html',
		controller : shoppingListComponentController,
		bindings : {
			items : '<',
			title : '@',
			onRemove : '&'
		}
	});

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

})();