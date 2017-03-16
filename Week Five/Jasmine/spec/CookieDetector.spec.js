describe('CookieDetector', function() {

	var itemsWithoutCookie;
	var itemsWithCookie;

	beforeEach(function() {
		itemsWithoutCookie = ['Apple', 'Mango', 'Banana'];
		itemsWithCookie = ['Milk', 'Bread', 'Cookie']
	});

	it('should not be able to detect cookie', function() {
		var result = DetectCookie(itemsWithoutCookie);
		expect(result).not.toBe(true);
	});

	it('should be able to detect cookie', function() {
		var result = DetectCookie(itemsWithCookie);
		expect(result).toBe(true);
	});

});