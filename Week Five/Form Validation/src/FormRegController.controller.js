(function(){

	'use strict';

	angular.module('Validation')
	.controller('FormRegController', FormRegController);

	FormRegController.$inject = [];

	function FormRegController() {
		var reg = this;

		reg.FormSubmitted = false;

		reg.user = {
			username : "",
			email : ""
		}

		reg.submit = function() {
			reg.FormSubmitted = true;
		};

	};

})();