var estudiantes = [
    {
        "codigo": "001",
        "nombre": "Roman Gomez",
        "promedio1": 3.5,
        "promedio2": 3.4,
        "promedio3": 4.5
    }, {
        "codigo": "002",
        "nombre": "Mario Perez",
        "promedio1": 5.0,
        "promedio2": 5.0,
        "promedio3": 4.5
    }, {
        "codigo": "003",
        "nombre": "Ramiro Lopez",
        "promedio1": 4.5,
        "promedio2": 4.8,
        "promedio3": 4.5
    }, {
        "codigo": "004",
        "nombre": "Juan Gonzalez",
        "promedio1": 2.5,
        "promedio2": 5.0,
        "promedio3": 4.5
    }, {
        "codigo": "005",
        "nombre": "Gustavo Pua",
        "promedio1": 3.2,
        "promedio2": 3.4,
        "promedio3": 4.5
    }, {
        "codigo": "006",
        "nombre": "Marlene Morales",
        "promedio1": 3.9,
        "promedio2": 2.4,
        "promedio3": 4.5
    }, {
        "codigo": "007",
        "nombre": "Ivan Diaz",
        "promedio1": 4.1,
        "promedio2": 3.4,
        "promedio3": 4.5
    }, {
        "codigo": "008",
        "nombre": "Carlos Hernandez",
        "promedio1": 1.0,
        "promedio2": 1.4,
        "promedio3": 4.5
    }, {
        "codigo": "009",
        "nombre": "Jorge Julio",
        "promedio1": 1.5,
        "promedio2": 4.6,
        "promedio3": 4.8
    }, {
        "codigo": "010",
        "nombre": "Carmen Manrrique",
        "promedio1": 4.8,
        "promedio2": 3.4,
        "promedio3": 4.5
    }
];
// Datos de JSON
function datosJSON(json) {
    var out = "";
    for (var i = 0; i < json.length; i++) {
        out += '<li class="items">' + '<p>Código: <span id="item1">' + json[i].codigo + '</span></p>' + '<p>Nombre: <span id="item2">' + json[i].nombre + '</span></p>' + '<p>Promedios: <span id="item3">' + json[i].promedio1 + " - " + json[i].promedio2 + " - " + json[i].promedio3 + '</span></p></li>';
    }
    document.getElementById("listado").innerHTML = out;
}
// Calcular la nota de promedios
function calcularPromedios(json) {
    var outCalcular = "";
    for (var i = 0; i < json.length; i++) {
        var calcularN = (json[i].promedio1 + json[i].promedio2 + json[i].promedio3)/ 3;
        var xSub = calcularN.toFixed(1);
        outCalcular += '<li class="items">' + '<p>Código: <span id="item1">' + json[i].codigo + '</span></p>' + '<p>Nombre: <span id="item2">' + json[i].nombre + '</span></p>' + '<p>Calcular la nota promedio: <span id="item3" class="resaltar">' + xSub + '</span></p></li>';
    }
    document.getElementById("listado").innerHTML = outCalcular;
}
// Mayor notas de promedios
function notasMayor(json) {
    var pos = 0;
    var promMay = "";
    for (var i = 0; i < json.length; i++) {
        var calcularN = (json[i].promedio1 + json[i].promedio2 + json[i].promedio3)/ 3;
        var xSub = calcularN.toFixed(1);
            if (xSub >= 4.0) {
                pos = i;
                promMay += '<li class="items">' + '<p>Código: <span id="item1">' + json[i].codigo + '</span></p>' + '<p>Nombre: <span id="item2">' + json[i].nombre + '</span></p>' + '<p>Mayor de nota promedio: <span id="item3" class="resaltar">' + xSub + '</span></p></li>';
            }
    }
    document.getElementById("listado").innerHTML = promMay;
}
// Menor notas de promedios
function notasMenor(json) {
    var pos = 0;
    var promMenor = "";
    for (var i = 0; i < json.length; i++) {
        var calcularN = (json[i].promedio1 + json[i].promedio2 + json[i].promedio3)/ 3;
        var xSub = calcularN.toFixed(1);
            if (xSub <= 3.9) {
                pos = i;
                promMenor += '<li class="items">' + '<p>Código: <span id="item1">' + json[i].codigo + '</span></p>' + '<p>Nombre: <span id="item2">' + json[i].nombre + '</span></p>' + '<p>Mayor de nota promedio: <span id="item3" class="resaltar">' + xSub + '</span></p></li>';
            }
    }
    document.getElementById("listado").innerHTML = promMenor;
}
// Mostrar todos estudiantes
function mostrarEstudiante() {
    datosJSON(estudiantes);
}
// Mostrar total de nota de promedio
function mostrarCalcular() {
    calcularPromedios(estudiantes);
}
// Mostrar la mayor de nota de promedios
function mostrarMayor() {
    notasMayor(estudiantes);
}
// Mostrar el menor de nota de promedios
function mostrarMenor() {
    notasMenor(estudiantes);
}