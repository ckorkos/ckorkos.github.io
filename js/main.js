$(document).ready(function() {
    var prev = localStorage.getItem("lastPage");

    if(prev==="items" || prev==="quests" || prev==="other") {
        // Change to specified tab
        changeSkywindTab(prev);

        // Scroll to tabs on page load
        if($(window).width()>=900) {
            document.getElementById("skywind-nav").scrollIntoView();
        }
        else {
            document.getElementById("skywind-nav-collapse").scrollIntoView();
        }
    }

    localStorage.clear();
});

// Change Project Thumbnails on Hover-In
function changeBG(project) {
    if(project==="pse-image") {
        document.getElementById(project).src = "images/pics/pse-thumb-hover.png";
        document.getElementById("pse-card-text").style.opacity = 1;
        document.getElementById("pse-card-text").style.backgroundColor = "rgba(0,0,0,0.8)";
    }
    else if(project==="other-image") {
        document.getElementById(project).src = "images/icons/projects-hover.png";
        document.getElementById("other-card-text").style.opacity = 1;
        document.getElementById("other-card-text").style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

// Change Project Thumbnails on Hover-Out
function revertBG(project) {
    if(project==="pse-image") {
        document.getElementById(project).src = "images/pics/pse-thumb.png";
        document.getElementById("pse-card-text").style.opacity = 0;
        document.getElementById("pse-card-text").style.backgroundColor = "rgba(0,0,0,0)";
    }
    else if(project==="other-image") {
        document.getElementById(project).src = "images/icons/projects.png";
        document.getElementById("other-card-text").style.opacity = 0;
        document.getElementById("other-card-text").style.backgroundColor = "rgba(0,0,0,0)";
    }
}

// Open Hamburger Menu
function openHamburgerMain() {
    $(".hamburger-menu-main").css('display', 'flex');
    $("#navbar-collapse .project-tab-hamburger").css('display', 'none');
    $("#navbar-collapse .project-tab-close").css('display', 'block');
    //$("#navbar-image").height(300);
}

// Open Hamburger Menu
function closeHamburgerMain() {
    $(".hamburger-menu-main").css('display', 'none');
    $("#navbar-collapse .project-tab-hamburger").css('display', 'block');
    $("#navbar-collapse .project-tab-close").css('display', 'none');
    //$("#navbar-image").height(88);
}

// Open Hamburger Menu
function openHamburger() {
    $(".hamburger-menu").css('display', 'flex');
    $(".project-tab-hamburger").css('display', 'none');
    $(".project-tab-close").css('display', 'block');
}

// Open Hamburger Menu
function closeHamburger() {
    $(".hamburger-menu").css('display', 'none');
    $(".project-tab-hamburger").css('display', 'block');
    $(".project-tab-close").css('display', 'none');
}

// Open Item Modal
function openItemModal(itemID) {
    $(itemID).css("display", "block");

    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
}

// Close Item Modal
function closeModal() {
    $(".modal").css("display", "none");
    
    document.body.style.position = 'relative';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';

    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Switch Item Modal
function switchItemModal(itemID) {
    closeModal();
    openItemModal(itemID);
}

// Skywind - Link Selections
function changeSkywindTab(tab) {
    // Check window width, close hamburger if visible
    if($(window).width()<=900) {
        closeHamburger();
        console.log("true");
    }

    // Remove Current "Selected" Styling
    $(".project-tab-name").removeClass("tab-selected");
    $(".menu-option").removeClass("tab-selected");
    $(".page-content").removeClass("content-selected");

    if(tab==="sundial") {
        // Change Navbar Option Styling
        $("#pse-sundial, #pse-sundial-menu").addClass("tab-selected");

        // Display Encounters Tab, Hide Others
        $("#content-sundial").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("Sundial");
    }
    else if(tab==="enterprise") {
        // Change Navbar Option Styling
        $("#pse-enterprise, #pse-enterprise-menu").addClass("tab-selected");

        // Display Items Tab, Hide Others
        $("#content-enterprise").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("Enterprise");
    }
    else if(tab==="marathon") {
        // Change Navbar Option Styling
        $("#skywind-quests, #skywind-quests-menu").addClass("tab-selected");

        // Display Quests Tab, Hide Others
        $("#content-marathon").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("Marathon");
    }
}