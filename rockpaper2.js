var selection = prompt("Piedra, papel o tijeras???");
var selection2 = prompt("Piedra, papel o tijeras???");

var papel = "papel";
var tijeras = "tijeras";
var piedra = "piedra";


if ((selection == selection2)) {
    alert("Empate, intenta nuevamente");
}
 else if ((selection == piedra) && (selection2 == papel)) {
    alert("PLAUYER 2 WINS");
} else if ((selection == piedra) && (selection2 == tijeras)) {
    alert("Player 1 Wins");
} else if ((selection == papel) && (selection2 == tijeras)) {
    alert("Player 2 Wins");
} else if ((selection == papel) && (selection2 == piedra)) {
    alert("Player 2 Wins");
} else if ((selection == tijeras) && (selection2 == piedra)) {
    alert("Player 2 Wins");
} else if ((selection == tijeras) && (selection2 == papel)) {
    alert("Player 1 Wins");
}



