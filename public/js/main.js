var clicked = 0;
var empty = "";

$(window).ready(function() {

  var dist = $("#sections").height();

  console.log("dist = " + dist);

  // set the empty div "behind" the sections bar to the variable set up
  $("#navswitch").css("height", dist);

});

/*
  On scroll, check the window's position in relation to the page's
  navigation bar. If it can be seen normally on the page (ie - located 
  below the window's top) do nothing; otherwise fix it to the top.
*/
$(window).scroll(function() {
  if($(window).scrollTop() > $("#midbar").offset().top) {
    // if top of window is below the sections bar, fix it to the top
    $("#sections").addClass('navbar-fixed');
    //document.getElementById("sections").className = "navbar-fixed";

    // set a variable to the current height of the sections bar
    var dist = $("#sections").offset().top;
    $("#navswitch").css("height", dist);

    var p = $("#navswitch").css("height");
  }
  if($(window).scrollTop() <= $("#midbar").offset().top) {
    // if top of window is below the sections bar, unfix it from top
    $("#sections").removeClass('navbar-fixed');
    //document.getElementById("sections").className = "navbar";

    // set the blank div back to height zero
    $("#navswitch").css("height", "0");

    var h = $("#navswitch").css("height");
  }
});


/*
  Read if user hovers over a navigation element. If so, turn the
  selection orange.
*/
$(window).ready(function() {
  $("#exp").hover(function() {
    $(this).css("color", "orange !important");
  }, function() {
    $(this).css("color", "#dddddd !important");
  });

  $("#edu").hover(function() {
    $(this).css("color", "orange !important");
  }, function() {
    $(this).css("color", "#dddddd !important");
  });

  $("#pro").hover(function() {
    $(this).css("color", "orange !important");
  }, function() {
    $(this).css("color", "#dddddd !important");
  });
});

/*
  Name: changecolor()
  Parameter: direction - whether element is being scrolled into or out of
  Parameter: name - id of element to change

  Recolor the project panel text if panel is hovered on.
*/
function changeColor(direction, name) {
  if(direction === 1) {
    //JQUERY: $(".panetext").css("color", "#dddddd");
    document.getElementById(name).style.color = "rgb(0,1,60)";
  }
  else if(direction === 0) {
    //JQUERY: $(".panetext").css("color", "orange");
    document.getElementById(name).style.color = "orange";
  }
}

/*
  Name: centerModal()
  Parameter: name - id of element to change

  Recolor the project panel text if panel is hovered on.
*/
function centerModal(name, e) {
  var boxTop = e.pageY - 200;
  $("#" + name).css("top", boxTop);
}


/*
  Name: changeDivContent(stuff)
  Parameter: stuff - choice of certain content to be loaded

  When the user selects a piece of content to view (education,
  experience, projects) load that file in the blank div provided
  below the page's top banner.
*/
function changeDivContent(stuff) {
  if(stuff === "experience") {
    if(clicked === 1) {
      clicked = 0;

      $('html, body').animate({
          scrollTop: $("#pagefront").offset().top
      }, 500);

      $("#edu").css("color", "#dddddd");
      $("#pro").css("color", "#dddddd");
      $("#exp").css("color", "#dddddd");

      $("#divider1").html(empty);
      $("#content").html(empty);
      $("#divider2").html(empty);

      $("footer").css("position", "absolute");
    }
    else {
      clicked = 1;

      $('html, body').animate({
          scrollTop: $("#midbar").offset().top
      }, 500);

      $("#divider1").html("<hr>");

      $("#edu").css("color", "#dddddd");
      $("#pro").css("color", "#dddddd");
      $("#exp").css("color", "orange");

      document.getElementById("content").innerHTML=
        '<object id="loaded" type="text/html" data="experience.html"></object>';
      /* FINAL CODE USING JQUERY
      $("#content").load("experience.html", function(){
        $("object").attr["id", "loaded"];
        $("#loaded").css("width", "100%");
      });
      */

      var mq = window.matchMedia("(min-width: 780px)");
      if(mq.matches) {
        // window width is at least 780 px
        $("#loaded").css("height", "1600px");
      }
      else {
        // window width is less than 780 px
        $("#loaded").css("height", "3700px");
      }

      $("#loaded").css("width", "94%");
      $("#divider2").html("<hr>");

      $("footer").css("position", "relative");
    }
  }
  else if(stuff === "education") {
    if(clicked === 2) {
      clicked = 0;

      $('html, body').animate({
          scrollTop: $("#pagefront").offset().top
      }, 500);

      $("#edu").css("color", "#dddddd");
      $("#pro").css("color", "#dddddd");
      $("#exp").css("color", "#dddddd");

      $("#divider1").html(empty);
      $("#content").html(empty);
      $("#divider2").html(empty);

      $("footer").css("position", "absolute");
    }
    else {
      clicked = 2;

      $('html, body').animate({
          scrollTop: $("#midbar").offset().top
      }, 500);

      $("#divider1").html("<hr>");

      $("#edu").css("color", "orange");
      $("#pro").css("color", "#dddddd");
      $("#exp").css("color", "#dddddd");

      document.getElementById("content").innerHTML=
        '<object id="loaded" type="text/html" data="education.html"></object>';
      /* FINAL CODE USING JQUERY
      $("#content").load("education.html", function(){
        $("object").attr["id", "loaded"];
        $("object").css("width", "100%");
      });
      */

      var mq = window.matchMedia("(min-width: 780px)");
      if(mq.matches) {
        // window width is at least 780 px
        $("#loaded").css("height", "1300px");
      }
      else {
        // window width is less than 780 px
        $("#loaded").css("height", "1800px");
      }

      $("#loaded").css("width", "94%");
      $("#divider2").html("<hr>");

      $("footer").css("position", "relative");
    }
  }
  else if(stuff === "projects") {
    if(clicked === 3) {
      clicked = 0;

      $('html, body').animate({
          scrollTop: $("#pagefront").offset().top
      }, 500);

      $("#edu").css("color", "#dddddd");
      $("#pro").css("color", "#dddddd");
      $("#exp").css("color", "#dddddd");

      $("#divider1").html(empty);
      $("#content").html(empty);
      $("#divider2").html(empty);

      $("footer").css("position", "absolute");
    }
    else {
      clicked = 3;

      $('html, body').animate({
          scrollTop: $("#midbar").offset().top
      }, 500);

      $("#divider1").html("<hr>");

      $("#edu").css("color", "#dddddd");
      $("#pro").css("color", "orange");
      $("#exp").css("color", "#dddddd");

      document.getElementById("content").innerHTML=
        '<object id="loaded" type="text/html" data="projects.html"></object>';
      /* FINAL CODE USING JQUERY
      $("#content").load("projects.html", function(){
        $("object").attr["id", "loaded"];
        $("object").css("width", "100%");
      });
      */

      var mq = window.matchMedia("(min-width: 780px)");
      if(mq.matches) {
        // window width is at least 780 px
        $("#loaded").css("height", "2300px");
      }
      else {
        // window width is less than 780 px
        $("#loaded").css("height", "3600px");
      }

      $("#loaded").css("width", "94%");
      $("#divider2").html("<hr>");

      $("footer").css("position", "relative");
    }
  }
}