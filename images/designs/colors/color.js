var num = 6;
var boardColors = generateRandomColors(num);
var tiles = document.querySelectorAll(".tile");
var modes = document.querySelectorAll(".mode");

play(num, tiles);

function play(num, tiles) {
	setupModeButtons();
	boardColors = generateRandomColors(num);
	
	tiles = document.querySelectorAll(".tile");

	// select a random tile to be the correct one
	var pickedColor = randomTile();
	document.getElementById("colorDisplay").textContent = pickedColor;
	var message = document.querySelector("#message");
	message.textContent = "";

	setupTiles(pickedColor);
}

function setupTiles(pickedColor) {
	for(var i=0; i<tiles.length; i++) {
		// add initial colors to squares
		tiles[i].style.background = boardColors[i];

		// make tiles visible
		tiles[i].style.opacity = 1;

		// add event listeners to squares
		tiles[i].addEventListener("click", function() {
			// grab and compare picked color to correct color
			var clickedColor = this.style.background;

			//FIXME CLICKEDCOLOR IS UNDEFINED
			if(clickedColor === pickedColor) {
				message.textContent = "Correct!";
				changeColors(clickedColor);
				document.querySelector("#gametitle").style.background = clickedColor;
				document.querySelector("#reset").innerHTML = "PLAY AGAIN?";

				for (var i=0; i < tiles.length; i++) {
					tiles[i].style.opacity = 1;
				}
			}
			else {
				this.style.opacity = 0;
				message.textContent = "Try Again";
			}
		});
	}
}

function setupModeButtons() {
	for(var i=0; i<modes.length; i++) {
		modes[i].addEventListener("click", function() {
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");

			//figure out how many squares to show
			if(this.textContent == "Easy") {
				num = 3;
				//update page to reflect changes
				newGame(num);
			}
			else if(this.textContent == "Hard") {
				num = 6;
				//update page to reflect changes
				newGame(num);
			}
		});
	}

	document.getElementById("easy").addEventListener("click", function() {
		num = 3;
		document.querySelector("#easy").classList.add("selected");
		document.querySelector("#hard").classList.remove("selected");

		for (var i=3; i < tiles.length; i++) {
			if(boardColors[i]) {
				tiles[i].style.background = boardColors[i];
			}
			else {
				tiles[i].style.display = "none";
			}
		}
	});

	document.getElementById("hard").addEventListener("click", function() {
		num = 6;
		document.querySelector("#hard").classList.add("selected");
		document.querySelector("#easy").classList.remove("selected");
		
		for (var i=0; i < tiles.length; i++) {
			tiles[i].style.display = "block";
		}
	});
}

document.getElementById("reset").addEventListener("click", function() {
	document.querySelector("#reset").innerHTML = "NEW GAME";
	newGame(num);
});

function changeColors(color) {
	// loop through all squares
	for(var i=0; i<boardColors.length; i++) {
		//change color to match given color
		tiles[i].style.background = color;
	}
}

function generateRandomColors(amount) {
	// make an array
	var arr = [];

	// add random colors to the array
	for(var i=0; i<amount; i++) {
		// get random color, push to array
		arr[i] = randomColor();
	}

	// return the array
	return arr;
}

function randomColor() {
	// red, green, and blue from 0 to 255
	var red = Math.floor(Math.random() * 255 + 1);
	var green = Math.floor(Math.random() * 255 + 1);
	var blue = Math.floor(Math.random() * 255 + 1);

	// add color values to an rgb list
	var final = "rgb(" + red + ", " + green + ", " + blue + ")";
	return final;
}

function randomTile() {
	var rand = Math.floor(Math.random() * boardColors.length);
	var tile = boardColors[rand];
	return tile;
}

function newGame(amount) {
	play(amount);
}