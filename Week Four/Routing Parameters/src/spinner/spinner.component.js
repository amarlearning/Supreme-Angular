(function(){
	'use strict';

	angular.module('spinner')
	.component('loadingImage', {
		templateUrl : 'src/spinner/spinner.template.html',
		controller : spinnerLoadingController,
	});

	spinnerLoadingController.$inject = ['$rootScope'];
	function spinnerLoadingController($rootScope) {
		var $ctrl = this;
		var canceller = [];

		$ctrl.$onInit = function() {
			var cancel = $rootScope.$on('$stateChangeStart', 
						function(event, tostate, toparam, frstate, frparam, option) {
							$ctrl.showSpinner = true;
						});
			canceller.push(cancel);

			cancel = $rootScope.$on('$stateChangeSuccess', 
						function(event, tostate, toparam, frstate, frparam, option) {
							$ctrl.showSpinner = false;
						});			
			canceller.push(cancel);
			cancel = $rootScope.$on('$stateChangeError', 
						function(event, tostate, toparam, frstate, frparam, option) {
							$ctrl.showSpinner = false;
						});
			canceller.push(cancel);
			$ctrl.$onDestroy = function() {
				canceller.foreach(function(item){
					item();
				});
			}	
		};
	};

})();