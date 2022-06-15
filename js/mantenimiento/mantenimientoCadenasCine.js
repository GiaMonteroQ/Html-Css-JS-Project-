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

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*
'use strict';
//Validación de que el formulario de registro de películas no tenga campos vacíos
const inputCodigoCadena = document.querySelector('#codigoCadena');
const inputCodigoCadenaNombre = document.querySelector('#codigoCadenaNombre');
const botonIngresarCadena = document.querySelector('#ingresar-cadena');
const inputProvincia = document.querySelector('#provincia');
const inputCanton = document.querySelector('#canton');
const inputDistrito = document.querySelector('#distrito');
const inputLogoCadena = document.querySelector('#logoCadena');
const inputLugar = document.querySelector('#lugarInput');

const validarIngresarCadenas = () => {
    let estaVacio = false;
    //Validación de que no hay espacios vacíos
    if (inputCodigoCadena.value == '') {
        estaVacio = true;
        document.querySelector('.div-codigoCadena').classList.add('input-error');
    } else {
        document.querySelector('.div-codigoCadena').classList.remove('input-error');
    }
    if (inputCodigoCadenaNombre.value == '') {
        estaVacio = true;
        document.querySelector('.div-codigoCadenaNombre').classList.add('input-error');
    } else {
        document.querySelector('.div-codigoCadenaNombre').classList.remove('input-error');
    }
    if (inputProvincia.value == '0') {
        estaVacio = true;
        document.querySelector('.div-provincia').classList.add('select-error');
    } else {
        document.querySelector('.div-provincia').classList.remove('select-error');
    }
    if (inputCanton.value == '0') {
        estaVacio = true;
        document.querySelector('.div-canton').classList.add('select-error');
    } else {
        document.querySelector('.div-canton').classList.remove('select-error');
    }
    if (inputDistrito.value == '0') {
        estaVacio = true;
        document.querySelector('.div-distrito').classList.add('select-error');
    } else {
        document.querySelector('.div-distrito').classList.remove('select-error');
    }
    if (inputLugar.value == '') {
        estaVacio = true;
        document.querySelector('.div-lugar').classList.add('input-error');
    } else {
        document.querySelector('.div-lugar').classList.remove('input-error');
    }

    //Mensaje mostrado en caso de un campo vacío
    if (estaVacio == true) {
        Swal.fire({
            'icon': 'warning', //Entonces aparece un ícono de alerta
            'title': 'No ha podido ingresar la información',
            'text': 'Por revise los campos resaltados',
            'confirmButtonText': 'Entendido',
        });
    } else {
        Swal.fire({
            'icon': 'success', //Entonces aparece un ícono de alerta
            'title': 'Cadena de cine registrada',
            'confirmButtonText': 'Entendido',
        }).then(() => {
            window.location.href = 'mantenimientoCartelera.html';
        })
    };
};

botonIngresarCadena.addEventListener('click', validarIngresarCadenas);
*/

///Para registrar la cadena
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
        let cadenaCine = {
            'codigoCadena': '000',
            'nombreCadena': document.querySelector('#txt-nombreCadenaCine').value,
            'nombreLugarCadena' : document.querySelector('#txt-nombreLugarCadenaCine').value
        };

        //1. variable con datos json, 2. end-point , 3. Página donde vamos a redireccionar después del registro
        registrarCadena(cadena, '/registrar-cadena', 'mantenimientoCadenasCine.html');
    }
};

botonRegistrar.addEventListener('click', validar);