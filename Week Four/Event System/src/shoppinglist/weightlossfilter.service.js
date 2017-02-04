(function(){
	'use strict';

	angular.module('shoppingListComponentApp')
	.service('weightlossfilterservice', weightlossfilterservice);

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

})();