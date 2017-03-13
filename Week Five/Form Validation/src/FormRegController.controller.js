(function(){

	'use strict';

	angular.module('Validation')
	.controller('FormRegController', FormRegController);

	FormRegController.$inject = [];

	function FormRegController() {
		var reg = this;

		reg.user = {
			username : ""
		}

	};

})();