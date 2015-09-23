console.log("Hola!!");
alert ("soy una alerta!!!");
var integer = 5;
var palabra = "quepedo"
var booleanVar = true;
var floatingPoint = 1.5;
var string = "Santiago";
var object = {nombre: "Santiago", apellido: "Galindo", telefono : "5543869662"};


/*NUEVA CLASE*/

function myfunction(){
	//Function Code
}



// 5variable = 5 //nombre invalido var.. only ABC and _   numeros solo con un _


var num1 = 10;
var num2 = 20;
var num3 = 3;
var result = num1+num2;
alert(result);
console.log(result);


//modulo  LO que queda despues de hacer la division entera

var modulo = num1 %  num3;
console.log(modulo);

//ejercicio

var n1 = 3;
var n2 = 10;
var n3 = 4;

var res = n1 * n2 + 5 + n3;   //siempre hace primero la * y /  y despues + o - 

//siempre usar () good practices

var res2 = (n1 * n2) + 5 + n3;


//Special Values 

console.log(5/0); //infinito

console.log(Infinity - Infinity);  //NaN   Not a Number

// Operators

console.log(typeof n1);
console.log(typeof string);  //nos dice que tipo de variable es  

//Boolean 

var v = true;
var f = false;

res_and = v && v;  //ONLY IF EVERYTHING IS TRUE = TRUE      SI necesitas IFE Y ACTA NACIEMITNO
console.log(res_and);


// OR

res_or = f || v;       // If either one is true = true.   SI necesitas IFE o Acta.  Si traes aunque sea una de las 2, la demas vale verga
console.log(res_or);


//NOT  negacion


res_not = !f;
console.log(res_not);      //VOltea el valor




// if


if(v){
	console.log("SI PASA LA HERRAMIENTA")
	alert("SI PASA HERRAMIENTA");
}


var edad = 17;
var hasID = true;    

if ((edad >= 18) || (hasID)) {            //FAKE ID
	alert("Felicidades")
}
else{
	alert("Te la pelaste papo")
}
////////////////////////////////
if ((edad >= 18) && (hasID)) {
	alert("Felicidades")
}                                         //FALSE
else{
	alert("Te la pelaste papo")
}


////////EJEMPLO NUEVO PERO CON ELSE IF /////

var age = 19 
var ID = true;

if ((age < 18) && (ID)) {
	alert("Police")
}                                         

else if ((age>=18) || ID){
	alert("Pasas Culero")
}
else{
	alert("Te la pelaste papo")
}