
function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(validar(num1, num2)) {
        var resultado = num1 + num2;
        var nota = "La suma es: " + resultado;
        document.getElementById('resultado1').innerHTML = nota;
        document.getElementById('resultado1').style.backgroundColor = "yellow";
    } else {
        document.getElementById('resultado1').innerHTML = "Formato incorrecto de números";
    }
}
function resta() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(validar(num1, num2)) {
        var resultado = num1 - num2;
        var nota = "La resta es: " + resultado;
        document.getElementById('resultado1').innerHTML = nota;
        document.getElementById('resultado1').style.backgroundColor = "yellow"; 
    } else {
        document.getElementById('resultado1').innerHTML = "Formato incorrecto de números";
    }
}
function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(validar(num1, num2)) {
        var resultado = num1 * num2;
        var nota = "La multiplicar es: " + resultado;
        document.getElementById('resultado1').innerHTML = nota;
        document.getElementById('resultado1').style.backgroundColor = "yellow";
    } else {
        document.getElementById('resultado1').innerHTML = "Formato incorrecto de números";
    }
}
function division() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(validar(num1, num2)) {
        var resultado = num1 / num2;

        if (resultado == Infinity){
            alert("División entre cero");
            document.getElementById("resultado").value = ""; 
        } else {
            var nota = "La división es: " + resultado;
            document.getElementById('resultado1').innerHTML = nota;
        document.getElementById('resultado1').style.backgroundColor = "yellow";
        }
    } else {
        document.getElementById('resultado1').innerHTML = "Formato incorrecto de números";
    }
}

function validar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return false;
    } else {
        return true;
    }
}

function hacerTabla() {
    var tabla = "";
    var num = parseFloat(document.getElementById("num").value);

    if(isNaN(num) == false){
        tabla += "TABLA DEL " + num + "<br>";
        for(var i = 1; i <= 10; i++){
            tabla += num + " x " + i + " = " + num * i + "<br>";
        }
        document.getElementById('resultado2').innerHTML = tabla;
    } else {
        alert ("Formato Incorrecto de Número");
    }
}