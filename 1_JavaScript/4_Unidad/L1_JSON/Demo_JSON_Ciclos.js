var jsonText = '{ "empresas" : [' +
    '{ "nit":"2203-1" , "compania":"Nokia", "pais": "Finlandia", "ciudad": "Espoo" },' +
    '{ "nit":"23423-1" , "compania":"Sony", "pais": "Japón", "ciudad": "Tokio" },' +
    '{ "nit":"56545-1" , "compania":"Motorola", "pais": "EE.UU", "ciudad": "Schaumburgg" },' +
    '{ "nit":"56545-1" , "compania":"Corea del Sur", "pais": "EE.UU", "ciudad": "Seúl" }'+'
]}'

/*var jsObj = JSON.parse(jsonText);*/

function leerJSON(json) {
    var outs = "---------- Empresas ------------ ";
    for (var i = 0; i < json.empresas.length; i++) {
        view += 
            "NIT: " + json.empresas[i].nit + 
            "Compañia: " json.empresas[i].compania + 
            "País: " json.empresas[i].pais + 
            "Ciudad: " json.empresas[i].ciudad +
            "<br>";
    }
    document.getElementById("empresas").innerHTML = view;
}
leerJSON(jsObj);