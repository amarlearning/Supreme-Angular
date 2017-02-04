(function(){
	'use strict';

	angular.module('shoppingListComponentApp', ['spinner'])
	.config(function(){
		console.log("Shopping List config triggered!");
	})
	.run(function(){
		console.log("Shopping List run triggered!");
	});

})();