
//creating local storage in order for me to use counters across different HTML pages
var good_counter = parseInt(localStorage.getItem("good_counter")) || 0;
var bad_counter = parseInt(localStorage.getItem("bad_counter")) || 0;

//function to increment the good_counter
function increment_good_count() {
    good_counter++;
    localStorage.setItem("good_counter", good_counter);
}

//function to increment the bad_counter
function increment_bad_count() {
    bad_counter++;
    localStorage.setItem("bad_counter", bad_counter);
}

//Reset the counter function
function reset_counter() {
    localStorage.removeItem("good_counter");
    localStorage.removeItem("bad_counter");

    good_counter = 0;
    bad_counter = 0;

}


//Function to reset count and return to main menu
function mainMenu() {
        window.location.href = "../index.html" ;
        reset_counter();
}

//HTML section changes within one HTML page
function closefarm_start() {
    document.getElementById("farm_start").style.display = "none";
    document.getElementById("farm_alt").style.display = "block";
}

function farmerhelp() {
    increment_good_count();
    document.getElementById("farmer_intro").style.display = "none";
    document.getElementById("farmer_helped").style.display = "block";
}

function farmerignore() {
    increment_bad_count();
    document.getElementById("farmer_intro").style.display = "none";
    document.getElementById("farmer_ignored").style.display = "block";
}

function forest_talk() {
    document.getElementById("forest_start").style.display = "none";
    document.getElementById("forest_intro").style.display = "block";
}

function forest_noise() {
    document.getElementById("forest_intro").style.display = "none";
    document.getElementById("forest_intro2").style.display = "block";
}

function unlock_door() {
    document.getElementById("door_locked").style.display = "none";
    document.getElementById("door_incorrect").style.display = "none";
    document.getElementById("door_unlocked").style.display = "block";
}
function incorrect_answer() {
    document.getElementById("door_locked").style.display = "none";
    document.getElementById("door_incorrect").style.display = "block";
}

function trust_goblin() {
    increment_good_count();
    window.location.href = "RuinsPage2b.html" ;
}

function ignore_goblin() {
    increment_bad_count();
    window.location.href = "RuinsPage3.html" ;
}

function help_orc() {
    increment_good_count();
    document.getElementById("orc_plead").style.display = "none";
    document.getElementById("orc_reward").style.display = "block";
}

function pet_dragon() {
    increment_good_count();
    window.location.href = "DragonsDen2.html" ;
}

function scare_dragon() {
    increment_good_count();
    window.location.href = "DragonsDen2.html" ;
}

//If statement function to determine the players ending.
function determine_ending() {
    if (good_counter > bad_counter) {
        window.location.href = "True_Ending.html";
    }

    else if (good_counter == bad_counter) {
        document.getElementById("dragons_choice").style.display = "none";
        document.getElementById("mid_ending").style.display = "block";
    }

    else {
        document.getElementById("dragons_choice").style.display = "none";
        document.getElementById("bad_ending").style.display = "none";
    }
}

function displayCounts() {
    var countsContainer = document.getElementById("counts-container");
    countsContainer.innerHTML = "Good Counter: " + good_counter + "<br>Bad Counter: " + bad_counter;
}
