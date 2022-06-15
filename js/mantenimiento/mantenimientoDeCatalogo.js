//Parte para activar el div de cada tab
function abrirMenu(evt, opcionMenu) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(opcionMenu).style.display = "block";
    evt.currentTarget.className += " active";
}

// Muestra el primer tab cuando se abre el menu
document.getElementById("defaultOpen").click();


//Para regirstar idioma
'use strict';
const botonRegistrar = document.querySelector('#btn-registrar');

const validar = () => {
    let error = false;
    let camposRequeridos = document.querySelectorAll(':required');

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('input-error');
            error = true;
        } else {
            campo.classList.remove('input-error');
        }
    });

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha podido registrar el idioma',
            'text': 'Por favor revise los campos resaltados'
        });
    } else {
        let idioma = {
            'codigoIdioma': '000',
            'nombreIdioma': document.querySelector('#txt-idiomas').value
        };

        //1. variable con datos json, 2. end-point , 3. Página donde vamos a redireccionar después del registro
        registrarIdioma(idioma, '/registrar-idioma', 'mantenimientoDeCatalago.html');
        inicializarListaIdiomas();
    }
};

botonRegistrar.addEventListener('click', validar);

const cuerpoTablaIdiomas = document.querySelector('#tbl-idioma tbody');

const inicializarListaIdiomas = async() => {
    await obtenerIdiomas('/obtener-idioma')
        .then(response => {
            mostrarTablaIdiomas(response);
        })
};

const mostrarTablaIdiomas = (idiomas) => {
    cuerpoTablaIdiomas.innerHTML = "";
    idiomas.forEach(objIdioma => {
        //Acá se construye de forma dinámica la tabla
        let fila = cuerpoTablaIdiomas.insertRow();
        //De acuerdo con la cantidad de th's repito esta acción
        // fila.insertCell() inserta la fila
        //innerHTML = modifica el contenido de la celda
        fila.insertCell().innerHTML = objIdioma.codigoIdioma;
        fila.insertCell().innerHTML = objIdioma.nombreIdioma;
    });
};
inicializarListaIdiomas();