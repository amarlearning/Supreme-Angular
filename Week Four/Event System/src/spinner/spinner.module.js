(function(){
	'use strict';

	angular.module('spinner', [])
	.config(function(){
		console.log("Spinner config triggered!");
	})
	.run(function(){
		console.log("Spinner run triggered!");
	});
	
})();