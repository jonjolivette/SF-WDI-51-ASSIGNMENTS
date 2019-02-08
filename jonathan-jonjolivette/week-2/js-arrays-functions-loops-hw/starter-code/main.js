/*
	Part 1: We have an array of people's ages, saved in the variable "ages".
	Write a for-loop that will print each of the elements to the console.
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];

for(var i = 0; i < ages.length; i++) {
	console.log(ages[i]);
}


/*
	Part 2: Let's create a new variable, "younger", which holds an empty array.
	Using a for-loop, populate the "younger" array with numbers from the "ages"
	array which are less than or equal to 20.

	Hint: Use the for-loop to go through each element in the "ages" array.

	Hint: Use the array.push() method to add an element to the end of an array.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var younger = [];


for(var i = 0; i < ages.length; i++) {
  if(ages[i] <= 20){
  younger.push(ages[i]);
  }
}
console.log(younger);


/*
	Part 3: We're comfortable going through an element from beginning to end, but let's
	flip this around. With the new "younger" array you created in the last part,
	print out the elements so that the last element is printed out first, and the
	first element is printed out last.

	Hint: What should the index for your for-loop be initialized to if we want to start
	at the end of the array?

	Hint: What would the conditional for your for-loop look like?
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var youngAge = [];


for(var i = 0; i < ages.length; i++) {
  if(ages[i] <= 20){
  youngAge.push(ages[i]);
  }
}
console.log(youngAge);
// console.log(youngAge[youngAge.length-1]);

var temp = youngAge[0];
youngAge[0] = youngAge[youngAge.length-1];
youngAge[youngAge.length-1] = temp;

console.log(youngAge);



/*
	Part 4: Now that you've finished the first 3 parts using a for-loop, repeat the same exercises
	(Part 1, Part 2, and Part 3) using a while-loop.
*/


//+++++++++++++++++++++++++++ PART I REFACTORED +++++++++++++++++++++++++
var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];

var i = 0;
while(i < ages.length){
	console.log(ages[i]);
	i++;
}


//+++++++++++++++++++++++++++ PART II REFACTORED +++++++++++++++++++++++++

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var younger = [];

var i = 0;
while(i < ages.length){
	if(ages[i] <= 20){
  	younger.push(ages[i]);
  }
	i++;
}
console.log(younger);



//+++++++++++++++++++++++++++ PART III REFACTORED +++++++++++++++++++++++++

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var youngAge = [];


var i = 0;
while(i < ages.length){
	if(ages[i] <= 20){
  youngAge.push(ages[i]);
  }
	i++;
}
console.log(youngAge);
// console.log(youngAge[youngAge.length-1]);

var temp = youngAge[0];
youngAge[0] = youngAge[youngAge.length-1];
youngAge[youngAge.length-1] = temp;

console.log(youngAge);



/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code
*/
function getDayOfWeek(dayOfWeek){
	switch (dayOfWeek) {
	  case 0:
	    day = "Monday";
	    break;
	  case 1:
	    day = "Tuesday";
	    break;
	  case 2:
	     day = "Wednesday";
	    break;
	  case 3:
	    day = "Thursday";
	    break;
	  case 4:
	    day = "Friday";
	    break;
	  case 5:
	    day = "Saturday";
	    break;
	  case 6:
	    day = "Sunday";
	  	break;
	  default:
	  	return "Please enter a valid day of the week."
	}
}

/*
	Bonus - Part 6: All this work is making me hungry. Let's create a new function, addPepperoniToPizza,
	that accepts an array of pizza ingredients. If the array of ingredients already contains
	pepperoni, then return the pizza ingredients without doing anything to it. If the array of
	ingredients does not contain pepperoni, then add pepperoni to the array and return it.

	For example, addPepperoniToPizza(['onions', 'olives', 'pineapple']) should return
	['onions', 'olives', 'pineapple', 'pepperoni'].

	And addPepperoniToPizza(['spinach', 'pepperoni', 'mushrooms']) should return
	['spinach', 'pepperoni', 'mushrooms'].

	Hint: Take a look at the array.indexOf() method. How can we use this to check if we have pepperoni
	in our array?
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*/

function addPepperoniToPizza(arr) {
  if (arr.indexOf('pepperoni') > -1)  {
			return arr;
		}
  else {
			arr.push("pepperoni");
			return arr;
		}
}
