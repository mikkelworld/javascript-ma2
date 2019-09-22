//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function GameStudio(name, location) {
	this.developer = name;
	this.location = location;
	this.country = "USA";
}

GameStudio.prototype.developerInfo = function () {
	console.log("The developer is called " + this.developer + " and is located in " + this.location + " - " + this.country);
}

var valve = new GameStudio("Valve Corporation", "Bellevue, WA");
valve.developerInfo();

var blizzard = new GameStudio("Blizzard Entertainment", "Irvine, CA");
blizzard.developerInfo();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sliced = numbers.slice(4, 5); // Indexes are 0-based so index 4 is the 5th number
console.log(sliced);

//3. Delete the last number in the array that you created above.
delete numbers[9];
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var paragraph = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

function replaceStrawberries(text) {
	// If we dont care about capitalization, we could also use /gi instead of /g to make the function shorter.
	text = text.replace(/strawberry/g, "banana");
	text = text.replace(/strawberries/g, "bananas");
	text = text.replace(/Strawberry/g, "Banana");
	text = text.replace(/Strawberries/g, "Bananas");

	return text;
}

console.log(replaceStrawberries(paragraph));

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var list = ["Manchester United", "Liverpool", "Chelsea", "Arsenal"];

clubsToCars.addEventListener("click", function() {
	for (var i = 0; i < 4; i++) {
		list.pop();
	}

	list.push("Mercedes");
	list.push("Audi");
	list.push("BMW");
	list.push("Toyota");

	console.log(list);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
	{ name: "Mikkel", age: 28, nationality: "norwegian" },
	{ name: "Philip", age: 33, nationality: "american" },
	{ name: "Lewis", age: 35, nationality: "british" },
];

var coolPeople = people.filter(function(person) {
	return (person.name === "Mikkel");
});

console.log(coolPeople);

//7. Create a simple function that logs the date.
function logTodaysDate() {
	console.log(new Date().toDateString());
}

logTodaysDate();