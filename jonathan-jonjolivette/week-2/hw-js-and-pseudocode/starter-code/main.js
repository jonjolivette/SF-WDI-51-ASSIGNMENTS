/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

let name = 'Jonathan';
let age = '1907';
let address = 'Oakland, Ca';
let greeting = "Hello, I'm " + name + ", I'm" + age + " years old and live in " + address + ".";
console.log(greeting);

/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

const greeting2 = `Hello, I'm ${name}, I'm ${age} years old and live in ${address}`;
console.log(greeting2);
//Using const but I am aware that I may utilize let here as well

/*
	Part 3: Pythagorean theorem. We will be using the Math object we saw earlier
	in the lesson for this problem.

	Create 2 variables, side1 and side2, which represent two sides of a triangle.
	Assign these variables any positive integer values.
	Create a third variable, side3, which represents the hypotenuse of the triangle.

	Use the Pythogorean theorem to solve for the value of side3.
	(https://en.wikipedia.org/wiki/Pythagorean_theorem)

	Hint: Take a look at the MDN reference for more information about the Math object.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

	Hint: We need to be able to calculate the square root of a number to find the
	value of the hypotenuse. Does the Math object give us a function to find the square root?

	Hint: We need to be able to calculate the square of a number to find the value
	of the hypotenuse. Does the Math object give us a function find the square of a number?

	Log the side1, side2 and side3 variables to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.
*/

const side1 = 2;
const side2 = 2;
const side3 = Math.pow(side1) + Math.pow(side2);
console.log(side1);
console.log(side2);
console.log(side3);



/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create variable to store the highest number;
// Set the first number to be the highest number;
// Counting either up or down the list compare the current number to the variable we stored the highest number
// Change the value of the variable that stores the highest number to the current number if the current number being counted in the list is higher in value than the variable that held the highest value
// Once we've worked our way thorugh every number in the list comparinig the variable's value you will have completed the list and replaced or rather set the highest value to be stored in the variable leaving you with the highest value in the list
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Bonus
Take a look at the numbers array below. Use the pseudo code you wrote above to find the largest number and log it to the console in the following format: `"The highest number is #"`.

If you need a hint on how to solve this one, take a look at the steps listed below, along with the linked resources.

Steps:
- First create a variable highestNumber and give it a value of the number 0.
- Then use a for loop(https://www.w3schools.com/js/js_loop_for.asp) to loop through the numbers array.
	Your for loop should look something like this:
	for (var i = 0; i < numbers.length; i++) {

	}
- Within the loop, use an if statement(https://www.w3schools.com/js/js_if_else.asp) to see if the current number (numbers[i]) is greater than the number that is currently stored in highestNumber.
- If so, save numbers[i] in the highestNumber variable.
	- Hint: you only need to use the var keyword when you initially set up a variable. To update a variable, simply use the variable name (highestNumber) followed by = followed by the new value (numbers[i]).
- After the for loop, log highestNumber to the console.
*/


var numbers = [20, 3, 5, 7, 13, 30];
var notoriousBIG = numbers[0];
// var notoriousBIG = 0;
for (var i = 1; i < numbers.length; i++) { // i = 2
	if (numbers[i] > notoriousBIG) { // 3 > 20
		notoriousBIG = numbers[i]; // notoriousBIG =20
	}
}
 notoriousBIG = Math.floor(notoriousBIG);
console.log(`The highest is ${notoriousBIG}.`);
