/*
	Part 1: We're going to be creating animals today.
	Create 4 animal objects: a dog, a cat, a bird, a mouse.
	Each of these animal objects should have a name, a noise that they make,
	and a makeNoise property that prints out their noise.
*/
const zoo = function(nameAnimal, noise){
	this.name = nameAnimal;
	this.noise = noise;
	this.makeNoise = function(){
		console.log(this.noise);
	}
};


const firstAnimal = new zoo('Simba', 'roarrrr!!!');
const secondAnimal = new zoo('Nala', 'grrrr');
const thirdAnimal = new zoo('Pumba', 'ounkounk');
const fourthAnimal = new zoo('Rafiki', 'owwoww');


/*
	Part 2: Let's use an array to hold all of these animals.
	Create a new variable, animals, that contains the 4 animals we just created.

	Use a for-loop to iterate through the array of animals and have each animal make a noise.

	Hint: Use the makeNoise() function for each animal in the array
*/
const allMyAnimals = [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal];
var animalsArray = [];
allMyAnimals.forEach(function(rodents) {  //CHOOSE TO TRY OUT THE FOREACH AS A BIT OF A CHALLENGE AS OPPOSE TO FOR LOOP
  animalsArray.push(rodents);
});
console.log(animalsArray);

/*
	Part 3: Let's see how hungry these animals get by adding a "hunger" property to them.
	Use a for-loop to iterate through the array of animals and add a "hunger" property with
	a value of 10. This value will represent how hungry the animal is. A value of 10 means
	they're pretty full, and a value of 0 means they're starving.

	Hint: The syntax to add a new property to an object looks like this:
	myObject.newPropertyName = newValue; // or...
	myObject['newPropertyName'] = newValue;
*/

let runIt = function(){
for(var i = 0; i < allMyAnimals.length; i++){
	var randomNum = Math.floor(Math.random() * 11);
	allMyAnimals[i].hunger = randomNum;
	console.log(allMyAnimals[i]);
	}
};

/*
	Part 4: These animals should be able to walk. Let's add a new "walk" property to them.
	For each animal, the "walk" property should be a function that prints out a string that
	says they are walking. It should also subtract 1 from their "hunger" property.

	For example, if I had a duck that looked like this:
	var duck = {
		name: 'duck',
		hunger: 8
	};
	duck.walk();
	// => "duck took a walk"
//
	console.log(duck.hunger);
	// => 7

	Hint: You will need the "this" keyword
*/
let walkItLikeItalkIt = function(){
	var length = allMyAnimals.length;
	for(var i = 0; i < length; i++ ){
		let walkItOut = allMyAnimals[i].walk = 'took a walk...';
		console.log(walkItOut);
	}
}




/*
	Part 5: Now these animals can walk and talk by themselves, but they're quite lonely.
	Let's add a "makeFriend" property to each animal. The "makeFriend" property will be a
	method that takes another animal as an argument, and adds it to their "friend" property.

	For example, if I had a duck and swan that looked like this:
	var duck = {
		name: 'duck'
	};
	var swan = {
		name: 'swan',
		noise: 'chirp quack'
	};
	duck.makeFriend(swan);

	console.log(duck.friend);
	// => { name: 'swan' }

	duck.friend.makeNoise();
	// => "chirp quack"
*/


/* BONUS
This bonus will be a challenge! To complete this step, you'll need to do some Googling to look up things that have not yet been covered.

Take a look at the index.html file. You'll notice the following code:

	<img src="">

Here we have an image without a src attribute.

Now take a peek inside the images folder to see what images are there.

Here are the image paths for reference:

	- images/bird.jpg
	- images/cat.jpg
	- images/dog.jpg
	- images/mouse.jpg

Note that the name of each image is the animal name (bird, cat, dog, or mouse) plus an extension of .jpg.

Now that you're familiar with the code and assets that are available to you, let's add an appear property to each animal. The appear property will be a method that updates the src attribute to the path of the image of that animal.

Test things out by calling the appear method for one of your animals. When you load the page in your browser, the image of the animal should appear!

Hint #1: Google the following:
	- "JavaScript querySelector"
	- "JavaScript setAttribute"

Hint #2: You'll need to use the this keyword to access the name of the current animal from within the appear method to create the image path. The format to do so should look like this:
	'images/' + this.name + '.jpg'

Hint #3: Still stuck? The code to update the image source should look like this:
	document.querySelector('img').setAttribute('src', 'images/' + this.name + '.jpg');
*/



// ++++++++++++HEADED DOWN RABBIT HOLE WITH THIS SO I'LL RETURN TO THE ++++++++++++++++++++++
// ++++++++++++BONUS MATERIAL I BEGAN TO PRODUCE BELOW AND TRY TO KNOCK IT OUT AT A LATER TIME++++++++++++++


// document.getElementsByTagName('img').setAttribute('src', )
let magic = document.querySelector("img");
let pic = "";
let images = ['images/bird.jpg', 'images/cat.jpg', 'images/dog.jpg', 'images/mouse.jpg'];

let noahsArk = function(){
	for(var i = 0; i < images.length; i++){
		// pic  = images[i];
		console.log(images[i]);
		// magic.setAttribute("src", pic);
	}
};

function addElement () {
  // create a new div element
  var newImg = document.createElement("img");
  // and give it some content
  var newElm = document.getElementsByTagName("body")
  // add the newly created img node to the body tag
  newElm.appendChild(newImg);



let appear = function(){
magic.setAttribute("src", pic);
};

let noahArk = function(arr){
	for(var i = 0; i < arr.length; i++){
		var finalResult = arr[i].appear = appear();
	}
	console.log(finalResult);
}
}
