$(window).scroll(function() {

  if($(window).scrollTop() > '256') {
    // if top of window is below the sections bar, fix it to the top
    $("#mainNav").css("position", "fixed");
    $("#subNav").css("position", "fixed");
    $("#subNav").css("margin-top", "59px");
    $("#nav-name").css("display", "inline-block");
    
    if($("#subNav").length === 1) {
      $("#intro").css("padding-top", "132px");
    }
    else {
      $("#intro").css("padding-top", "92px");
    }
  }
  if($(window).scrollTop() <= '256') {
    // if top of window is below the sections bar, unfix it from top
    $("#mainNav").css("position", "relative");
    $("#subNav").css("position", "relative");
    $("#subNav").css("margin-top", "0px");
    $("#nav-name").css("display", "none");
    $("#intro").css("padding-top", "35px");
    
    if($("#subNav").length === 1) {
      $("#intro").css("padding-top", "-5px");
    }
    else {
      $("#intro").css("padding-top", "35px");
    }
  }

});

$(document).ready(function() {
	if($(window).width() <= 770) {
		$("#back").text("<");
	}
	else {
		$("#back").text("< Return to Projects");
	}
});

$(document).resize(function() {
	if($(window).width() <= 770) {
		$("#back").text("<");
	}
	else {
		$("#back").text("< Return to Projects");
	}
});

$(document).ready(function(){
	$(".custom-card").hover(
		function() {
			$(this).parent().find(".card-img-top").css("width", "98%");
			$(this).parent().find(".card-img-top").css("filter", "grayscale(0%)");
			$(this).parent().find(".card-title").css("color", "#101010");
			$(this).parent().find(".card-text").css("color", "#101010");
		},
		function() {
			$(this).parent().find(".card-img-top").css("width", "100%");
			$(this).parent().find(".card-img-top").css("filter", "grayscale(100%)");
			$(this).parent().find(".card-title").css("color", "#323333");
			$(this).parent().find(".card-text").css("color", "#323333");
		}
	);

	$(".card-body").hover(
		function() {
			$(this).parent().find(".card-img-top").css("width", "98%");
			$(this).parent().find(".card-img-top").css("filter", "grayscale(0%)");
			$(this).parent().find(".card-title").css("color", "#101010");
			$(this).parent().find(".card-text").css("color", "#101010");
		},
		function() {
			$(this).parent().find(".card-img-top").css("width", "100%");
			$(this).parent().find(".card-img-top").css("filter", "grayscale(100%)");
			$(this).parent().find(".card-title").css("color", "#323333");
			$(this).parent().find(".card-text").css("color", "#323333");
		}
	);
});

// Open the Modal
function openModal(which) {
  $("body").attr("scroll","no");
  $("body").css("overflow", "hidden");
  document.getElementById(which).style.display = "block";
}

// Close the Modal
function closeModal(which) {
  $("body").attr("scroll","yes");
  $("body").css("overflow", "visible");
  $(".modal-backdrop").css("display", "none");
  document.getElementById(which).style.display = "none";
}

function hoverColor(which) {
  $("#" + which).attr("src", "../images/icons/" + which + "-hover.png");
}

function standardColor(which) {
  $("#" + which).attr("src", "../images/icons/" + which + ".png");
}

// Next/previous controls
function plusSlides(n, modalName) {
  showSlides(slideIndex += n, modalName);
}

// Thumbnail image controls
function currentSlide(n, modalName) {
  showSlides(slideIndex = n, modalName);
}

function showSlides(n, modalName) {
  var i;
  var slides = $("#" + modalName).find(".displaySlides");
  
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  slides.css("display", "none");
  
  if(slides.length > 1) {
    var dots = $("#" + modalName).find(".dot");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" current", "");
    }
    dots[slideIndex-1].classList.add("current");
  }
  
  slides.get(slideIndex-1).style.display = "block";
}