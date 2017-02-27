(function(){
	'use strict';

	angular.module('MenuApp')
	.component('subCategoryList', {
		templateUrl : 'src/templates/subcategorylist.component.html',
		controller : subCategoryListComponentController,
		bindings : {
			items : '<'
		}
	});

	function subCategoryListComponentController() {

	};

})();