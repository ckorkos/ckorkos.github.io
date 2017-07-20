var changed = false;

function toggle() {
	if(changed) {
		document.getElementById("colors").style.background = "white";
		changed = false;
	}
	else {
		document.getElementById("colors").style.background = "indigo";
		changed = true;
	}
}