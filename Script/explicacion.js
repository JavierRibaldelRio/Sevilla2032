$("#explicacion-mapa").hide();

var ocultado = true; //Para saber el estado de los textos y el boton 

$("#boton").click(function() {

    ocultado = !ocultado; //le damos ocultado el valor contario al que tenía

    if (ocultado == true) {

        $("#explicacion-mapa").hide(); //Esconder

        $("#textoBoton").html("Mostrar");

    } else {

        $("#explicacion-mapa").show(); //Mostar

        $("#textoBoton").html("Ocultar");

    }


});