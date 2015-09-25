var userChoice = prompt("Piedra Papel o Tijeras?");
var computerChoice = Math.random();
console.log(computerChoice); 
if (computerChoice<=0.33){
	computerChoice = "piedra";
}
else if(0.34<=computerChoice<=0.66){
	computerChoice = "papel";
} else{
	computerChoice = "tijeras";
}

choice1 = userChoice;
choice2 = computerChoice;

function compare(choice1, choice2){
	if(choice1===choice2){
		return("Hay un empate");
	}
	if(choice1==="piedra"){
		if(choice2==="tijeras"){
			return("Gana Piedra");
		}else{
			return("Gana Papel");
		}

	}
		if(choice1==="papel"){
		if(choice2==="rock"){
			return("Gana papel");
		}else{
			return("Ganan Tijeras");
		}

	}
		if(choice1==="tijeras"){
		if(choice2==="piedra"){
			return("Gana Piedra");
		}else{
			return("Ganan tijeras");
		}

	}
}
console.log(compare(choice1,choice2));
