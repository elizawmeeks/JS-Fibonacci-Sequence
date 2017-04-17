console.log("hihi");

// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500.

// 0 1 1 2 3 5 8 13

var lastTwo = [0,1];
var fibonacci = lastTwo[0] + " " + lastTwo[1] + " ";
var newDigit;

for (fibonacci; ; fibonacci += newDigit + " ") {
	newDigit = lastTwo[0] + lastTwo[1];
	lastTwo.push(newDigit);
	lastTwo.shift();
	if (newDigit > 500) {
		break;
	}
};

console.log(fibonacci);