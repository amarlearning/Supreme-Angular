describe('OddEven', function () {
	var OddEvenRandom8;
	var OddEvenRandom3;

	beforeEach(function() {
		OddEvenRandom8 = function(to, from) {
			return 8;
		}

		OddEvenRandom3 = function(to, from) {
			return 3;
		}
	});	

	it('should be equal to even number 8', function() {
		var result = OddEvenRandomGenerator("even", OddEvenRandom8);
		expect(result).toEqual(8);
	});

	xit('should be equal to odd number 3', function() {
		var result = OddEvenRandomGenerator("odd", OddEvenRandom3);
		expect(result).toEqual(3);
	});

})