(function(){
	'use strict';

	angular.module('spinner')
	.component('loadingIcon', {
		templateUrl : 'src/spinner/loadingicon.spinner.html',
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

	
})();