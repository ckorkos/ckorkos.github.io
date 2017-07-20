var canPlay = true;
var p1 = 0;
var p2 = 0;
var max = 5;

document.querySelector("#max").innerHTML = max;
update();

document.querySelector("#maxscore").addEventListener("input", function() {
	changeMax();
})

function increase(player) {
	if(canPlay) {
		if(player === 1) {
			p1++;
			update();
		}
		else if(player === 2) {
			p2++;
			update();
		}
	}
	check();
}

function check() {
	if(p1 == max) {
		canPlay = false;
		document.getElementById("p1").style.color = "green";
	}
	else if(p2 == max) {
		canPlay = false;
		document.getElementById("p2").style.color = "green";
	}
}

function update() {
	 document.querySelector("#p1").innerHTML = p1;
	 document.querySelector("#p2").innerHTML = p2;
}

function reset() {
	p1 = 0;
	p2 = 0;
	canPlay = true;
	update();

	document.getElementById("p1").style.color = "black";
	document.getElementById("p2").style.color = "black";
}

function changeMax() {
	var newMax = document.querySelector("#maxscore").value;
	max = newMax;
	document.querySelector("#max").innerHTML = max;
}