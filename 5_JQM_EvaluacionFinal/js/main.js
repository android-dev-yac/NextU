function cambiarPagina(page) {

    switch (page) {
        case "paginaRegistro":
            $.mobile.changePage("#" + page, {
                transition: "slidedown"
            });
            break;
        case "paginaLista":

            $.mobile.changePage("#" + page, {
                transition: "slideup"
            });
            break;
        case "pgHotelCaribe":

            $.mobile.changePage("#" + page, {
                transition: "fade"
            });
            break;
        case "pgHotelTeque":

            $.mobile.changePage("#" + page, {
                transition: "fade"
            });
            break;
        case "paginaInicio":
            $.mobile.changePage("#" + page, {
                transition: "flip"
            });
            break;

    }


}

$(document).ready(function() {

    var lalngCaribe = new google.maps.LatLng(10.39795, -75.5631552);
    var lalngTeque = new google.maps.LatLng(10.39795, -75.5631552);
    var lalngRegis = new google.maps.LatLng(10.39795, -75.5631552);
    var marcadoCaribe;
    var marcadoTeque;
    var marcadores = [];
    var marcadorRegistro;
    var registras = [];
    var mapaRegistro;
    var latitudRegis;
    var longitudRegis;


    function mostrarMapHotelCaribe() {
        var opciones = {
            zoom: 3,
            center: lalngCaribe,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapa = new google.maps.Map(document.getElementById('mapHotelCaribe'), opciones);

        marcadoCaribe = new google.maps.Marker({
            position: lalngCaribe,
            map: mapa,
            draggable: true,
            title: "Hotel Caribe"
        });


        var content1 = '<div style="width:100px; height: 50px>' + '<p> Este es Hotel Caribe </p>';


        var ventanInfo1 = new google.maps.InfoWindow({
            content: content1
        });

        google.maps.event.addEventListener(marcado1, 'click', function(){
            ventanInfo1.open(mapa, marcadoCaribe);
        });

    }
    mostrarMapHotelCaribe();

    function mostrarMapHotelTeque() {
        var opciones = {
            zoom: 3,
            center: lalngTeque,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapa = new google.maps.Map(document.getElementById('mapHotelTeque'), opciones);

        marcadoTeque = new google.maps.Marker({
            position: lalngTeque,
            map: mapa,
            draggable: true,
            title: "Hotel Tequemeda"
        });


        var content2 = '<div style="width:100px; height: 50px>' + '<p> Este es Hotel Tequemeda </p>';


        var ventanInfo2 = new google.maps.InfoWindow({
            content: content2
        });

        google.maps.event.addEventListener(marcado1, 'click', function(){
            ventanInfo2.open(mapa, marcadoTeque);
        });

    }
    mostrarMapHotelTeque();

    $("#btnRegistrar").click(function() {



        var registrar = {
            nombre: $("#nombre").val(),
            ciudad: $('#ciudad').val(),
            telefono: $('#telefono').val(),
            estrella: $('#estrella').val(),
            latitud: latitudRegis,
            longitud: longitudRegis
        };


        registras.push(registrar);



        alert("Ya registarte");

        $("#nombre").val("");
        $('#ciudad').val("");
        $('#telefono').val("");
        $('#estrella').val("");

        marcadorRegistro.setPosition(lalngRegis);
        mapaRegistro.setCenter(lalngRegis);

    });
    function mostrarMapaRegistro() {

        var opciones = {
            zoom: 10,
            center: lalngRegis,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        mapaRegistro = new google.maps.Map(document.getElementById("mapRegistrar"), opciones);

        marcadorRegistro = new google.maps.Marker({
            position: lalngRegis,
            map: mapaRegistro,
            draggable: true,
            title: "Este mi hotel"
        });

        google.maps.event.addListener(marcadorRegistro, 'dragend', function(event) {
            latitudPunto = event.latLng.lat();
            longitudPunto = event.latLng.lng();


        });


    }
    mostrarMapaRegistro();


});
