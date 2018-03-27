// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// the variables connecting HTML elements to JavaScript for use with event listeners
var speakButton = document.querySelector('#speak');
var nounOneBtn = document.querySelector('#nounOne');
var verbBtn = document.querySelector('#verb');
var adjectiveBtn = document.querySelector('#adjective');
var nounTwoBtn = document.querySelector('#nounTwo');
var placeBtn = document.querySelector('#place');
var errorMsg = document.querySelector('#errorMsg');
var resetBtn = document.querySelector('#reset');

// the arrays that are needed to generate a random (rand) string for each part of the sentence
var randNounOne = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var randVerb = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var randAdjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var randNounTwo = ['goat', 'monkey', 'fish', 'cow', 'frog', 'ladybug', 'worm'];
var randPlace = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// declare the variables that will hold each randomly generated string after the randValueFromArray function is run on the corresponding array
var nounOne;
var verb;
var adjective;
var nounTwo;
var place;

// variable that will hold the sentence comprised of concatenated strings
var textToSpeak;

/* Event Listeners
------------------------------------------------- */
// When an HTML button is clicked, the generateWord function is run
nounOneBtn.addEventListener("click", generateWord);
verbBtn.addEventListener("click", generateWord);
adjectiveBtn.addEventListener("click", generateWord);
nounTwoBtn.addEventListener("click", generateWord);
placeBtn.addEventListener("click", generateWord);

/* Functions
-------------------------------------------------- */

// the function needed to randomly return one of the strings in the called upon array
function randValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
} 

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* the function used to select the appropriate button and run the randValueFromArray function to pick a random value from the selected array and speak it to the user, so that the user knows which word is going into the final sentence. */

function generateWord(event){

	var targetBtn = event.target.id;

	switch (targetBtn) {
		case "nounOne":
		nounOne = randValueFromArray(randNounOne);
		speakNow(nounOne);
		break;
		case "verb":
		verb = randValueFromArray(randVerb);
		speakNow(verb);
		break;
		case "adjective":
		adjective = randValueFromArray(randAdjective);
		speakNow(adjective);
		break;
		case "nounTwo":
		nounTwo = randValueFromArray(randNounTwo);
		speakNow(nounTwo);
		break;
		case "place":
		place = randValueFromArray(randPlace);
		speakNow(place);
		break;
	}
}

/* Onclick Handler
-------------------------------------------------- */
/* Onclick handler for the button that speaks the text contained in the textToSpeak var. If the user doesn't pick from a category, they will be prompted to do so, because none of the values should be left null. */
speakButton.onclick = function() {
	errorMsg.innerHTML = "";
	if (nounOne == null) {
		errorMsg.innerHTML = "Pick a noun!";
		speakNow("Pick a noun!");
	} 
	else if (verb == null) {
		errorMsg.innerHTML = "Pick a verb!";
		speakNow("Pick a verb!");
	}
	else if (adjective == null) {
		errorMsg.innerHTML = "Pick an adjective!";
		speakNow("Pick an adjective!");
	}
	else if (nounTwo == null) {
		errorMsg.innerHTML = "Pick another noun!";
		speakNow("Pick another noun!");
	}
	else if (place == null) {
		errorMsg.innerHTML = "Pick a place!";
		speakNow("Pick a place!");
	}
	else {
		textToSpeak = nounOne + ' ' + verb + ' ' + adjective + ' ' + nounTwo + ' ' + place + '.'
	speakNow(textToSpeak);
	}
}

/*  Upon clicking this function, all of the variables to be concatenated in the textToSpeak string are returned to a value of null so that the user can click the buttons again & create a new sentence. */
reset.onclick = function() {
	nounOne = null;
	verb = null;
	adjective = null;
	nounTwo = null;
	place = null;
}



