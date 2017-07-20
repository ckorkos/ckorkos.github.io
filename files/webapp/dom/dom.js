// GENERAL PAGE CODE

var h1 = document.getElementsByTagName("h1");
for(var i=0; i<h1.length; i++) {
	h1[i].addEventListener("click", function() {
		alert("This is an h1 element.");
	});
}

document.querySelector("p").addEventListener("click", function() {
	alert("This is a paragraph element.");
});

// FUNCTIONS BELOW RETRIEVE PAGE CONTENT

// Note: Treat return value of certain functions as an array, 
// because the function can return multiple items

// Select an element specifically by its ID
function select1() {
	var doc = document.getElementById("first");
	var docText = doc.innerHTML;
	alert(docText);
}

// Select all elements with a certain Class Name
function select2() {
	var doc = document.getElementsByClassName("special");
	var docText = doc[0].innerHTML + "\n\n";
	var x=1;
	while(x < doc.length) {
		var docText = docText + doc[x].innerHTML + "\n\n";
		x++;
	}
	alert(docText);
}

// Select all elements with a certain Tag
function select3() {
	var doc = document.getElementsByTagName("p");
	var docText = doc[0].innerHTML;
	alert(docText);
}

// Select the first element with a certain ID
function select4() {
	var doc = document.querySelector("#first");
	var docText = doc.innerHTML;
	alert(docText);
}

// Select the first element with a certain Class Name
function select5() {
	var doc = document.querySelector(".special");
	var docText = doc.innerHTML;
	alert(docText);
}

// Select all elements with a certain Tag
function select6() {
	var doc = document.querySelectorAll(".contentbox p");
	var docText = doc[0].innerHTML + "\n\n";
	var x=1;
	while(x < doc.length) {
		var docText = docText + doc[x].innerHTML + "\n\n";
		x++;
	}
	alert(docText);
}

// FUNCTIONS BELOW CHANGE PAGE CONTENT
var standing = false;
var reached = false;
var finished = false;
var open = false;

// Add or remove an underline from the text element.
function change1() {
	document.getElementById("underline").classList.toggle("underline");
	if(standing) {
		document.getElementById("underline").textContent = "I need something to stand on.";
		standing = false;
	}
	else {
		document.getElementById("underline").textContent = "Great, I feel more stable now.";
		standing = true;
	}
}

// Grow or shrink text size, and change element's text content.
function change2() {
	document.getElementById("grow").classList.toggle("big");
	if(reached) {
		document.getElementById("grow").textContent = "I need to reach something higher up.";
		reached = false;
	}
	else {
		document.getElementById("grow").textContent = "Got it!";
		reached = true;
	}
}

// Add a strikethrough to the element and change its text content.
function change3() {
	document.getElementById("task").classList.toggle("complete");
	if(finished) {
		document.getElementById("task").innerHTML = "I have a task to finish.";
		finished = false;
	}
	else {
		document.getElementById("task").innerHTML = "Complete!";
		finished = true;
	}
}

// Toggle the border of a page element and change its text content.
function change4() {
	document.getElementById("boxed").classList.toggle("box");
	if(open) {
		document.getElementById("boxed").innerHTML = "I just feel so boxed in.";
		open = false;
	}
	else {
		document.getElementById("boxed").innerHTML = "Much better!";
		open = true;
	}
}

// FUNCTIONS BELOW CHANGE ELEMENT ATTRIBUTES

// Switch desired destination (image and link)
function switchPort(dest) {
	if(dest === 1) {
		// switch to hogwarts
		document.getElementById("portkey").setAttribute("href", 
			"https://www.pottermore.com/explore-the-story/hogwarts");

		document.getElementById("warts").classList.add("selected");
		document.getElementById("meade").classList.remove("selected");
		document.getElementById("burrow").classList.remove("selected");
	}
	else if(dest === 2) {
		// switch to hogsmeade
		document.getElementById("portkey").setAttribute("href", 
			"https://www.pottermore.com/explore-the-story/hogsmeade");

		document.getElementById("meade").classList.add("selected");
		document.getElementById("warts").classList.remove("selected");
		document.getElementById("burrow").classList.remove("selected");
	}
	else {
		// switch to the burrow
		document.getElementById("portkey").setAttribute("href", 
			"https://www.pottermore.com/explore-the-story/the-burrow");

		document.getElementById("burrow").classList.add("selected");
		document.getElementById("meade").classList.remove("selected");
		document.getElementById("warts").classList.remove("selected");
	}
}

// Switch image from cats to dogs
function animal(cat) {
	if(cat) {
		document.getElementById("animalPic").setAttribute("src", 
			"http://lorempixel.com/320/240/cats/");
	}
	else {
		document.getElementById("animalPic").setAttribute("src", 
			"http://loremflickr.com/320/240/puppy");
	}
}