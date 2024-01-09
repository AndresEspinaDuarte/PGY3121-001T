console.log("Hola JS");

//alert("Bienvenido!!!");

var miPrimeraVariable = 1;
const miPrimeraConstante = 0;

var variableUno = 100;
var variableDos = "10";

var numUno;

var resultado = variableUno + parseInt(variableDos);

console.log("Constante",miPrimeraConstante);
console.log("Variable", miPrimeraVariable);
console.log("Resultado",resultado);
sumar();
console.log("resta",restar(40,5));

function sumar(){
    var n1 = 50;
    var n2 = 100;
    numUno = n1;
    return n1 + n2;
}

console.log("numero uno",numUno);
console.warn("Soy un warning");
console.error("Soy un error");

function restar(n1,n2){
    return n1 - n2;
}


//var variableUno = 10;
//var variableDos = "10";
if ( variableUno === variableDos) {
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

if (variableUno > variableDos && variableUno == 100 || variableDos > 50000) {
    console.log("Si, es mayor.");
}else{
    console.log("No, es menor");
}


function mostrarInformcaionFormulario(){
    //console.log("Haciendo click");
    var nombres = document.getElementById("txtNombre").value; 
    var aPaterno = document.getElementById("txtApePaterno").value; 
    var aMaterno = document.getElementById("txtApeMaterno").value; 
    var cel = document.getElementById("txtCelular").value; 
    var pw = document.getElementById("txtContrasena").value; 
    var rptPw = document.getElementById("repetirContrasena").value; 
    var genero = document.getElementById("cmbGenero").value; 
    
    if (nombres == '' ) {
        alert("Debe ingresar los nombres.");
        return;
    }

    if (nombres.length < 6 ) {
        alert("El largo minimo es de 6 caracteres");
        return;
    }

    if (aPaterno == '' ) {
        alert("Debe ingresar el apellido paterno.");
        return;
    }
    if (aMaterno == '' ) {
        alert("Debe ingresar el apellido materno.");
        return;
    }
    if (cel == '' ) {
        alert("Debe ingresar un número de celular.");
        return;
    }
    if (pw == '' ) {
        alert("Debe ingresar una contraseña.");
        return;
    }
    if (rptPw == '' ) {
        alert("Debe volver a ingresar la contraseña.");
        return;
    }



    if (pw != rptPw) {
        alert("Las contraseñas no son iguales");
        return;
    }


    console.log("Enviado");
}


function eventoFocus() {
    console.log("Evento focus");
}

function eventoChange(){
    console.log("Evento Change");
}

function eventoBlur(){
    console.log("Evento BLUR");
}

function eventoKeyUp(){
    console.log("Evento KEY UP");
}