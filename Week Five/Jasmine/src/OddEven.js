
function getRandomNumber(from, to) {
	return Math.random() * (max-min) * min;
}

// Function to find odd or even random number

function OddEvenRandomGenerator(type, randomNumberGenerator) {
	var found = false;

	while(!found) {
		var number = randomNumberGenerator(1, 10);
		
		if(type === "odd") {

			if(number % 2 !== 0) {
				return number;
			}

		} else {

			if (number % 2 === 0) {
				return number;
			}
		}
	}
}