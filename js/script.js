console.log("File begin");

let my_name;
let year;
const current_year = 2025;

function fill_in_the_blanks() {
    my_name = "Vincent";
    year = 2005;
    document.getElementById("name").innerHTML = my_name;
    document.getElementById("year").innerHTML = year;
}

function how_old_are_you() {
    alert(current_year - year);
}

function change_globals() {
    my_name = "Todd";
    year = 1990;
    document.getElementById("name").innerHTML = my_name;
    document.getElementById("year").innerHTML = year;
}

console.log("File end");