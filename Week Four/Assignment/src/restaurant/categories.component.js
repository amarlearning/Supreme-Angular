(function(){
	'use strict';

	angular.module('MenuApp')
	.component('categoryList', {
		templateUrl : 'src/templates/categorylist.component.html',
		controller : categoryListComponentController,
		bindings : {
			items : '<'
		}
	});

	function categoryListComponentController() {

	};

})();