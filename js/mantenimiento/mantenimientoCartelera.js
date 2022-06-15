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

'use strict';
//Validación de que el formulario de registro de películas no tenga campos vacíos
const inputNombrePelicula = document.querySelector('#nombrePelicula');
const inputDescripcionPelicula = document.querySelector('#descripcionPelicula');
const inputDuracionPelicula = document.querySelector('#duracionPelicula');
const inputCinePelicula = document.querySelector('#cinePelicula');
const inputCategoriaPelicula = document.querySelector('#categoriaPelicula');
const inputFechaInicioPelicula = document.querySelector('#fechaInicioPelicula');
const inputFechaFinPelicula = document.querySelector('#fechaFinPelicula');
const inputCalificacionPelicula = document.querySelector('#calificacionPelicula');
const inputTrailerPelicula = document.querySelector('#trailerPelicula');
const inputImagenPelicula = document.querySelector('#imagenPelicula');
const botonGuardarPelicula = document.querySelector('#guardar-pelicula');

const validarGuardarPeliculas = () => {
    let estaVacio = false;
    //Validación de que no hay espacios vacíos
    if (inputNombrePelicula.value == '') {
        estaVacio = true;
        document.querySelector('.div-nombrePelicula').classList.add('input-error');
    } else {
        document.querySelector('.div-nombrePelicula').classList.remove('input-error');
    }
    if (inputDescripcionPelicula.value == '') {
        estaVacio = true;
        document.querySelector('.div-descripcionPelicula').classList.add('textarea-error');
    } else {
        document.querySelector('.div-descripcionPelicula').classList.remove('textarea-error');
    }
    if (inputDuracionPelicula.value == '') {
        estaVacio = true;
        document.querySelector('.div-duracionPelicula').classList.add('input-error');
    } else {
        document.querySelector('.div-duracionPelicula').classList.remove('input-error');
    }
    if (inputCinePelicula.value == '0') {
        estaVacio = true;
        document.querySelector('.div-cinePelicula').classList.add('select-error');
    } else {
        document.querySelector('.div-cinePelicula').classList.remove('select-error');
    }
    if (inputCategoriaPelicula.value == '0') {
        estaVacio = true;
        document.querySelector('.div-categoriaPelicula').classList.add('select-error');
    } else {
        document.querySelector('.div-categoriaPelicula').classList.remove('select-error');
    }
    if (inputFechaInicioPelicula.value == '') {
        estaVacio = true;
        document.querySelector('.div-inicioProyecciones').classList.add('input-error');
    } else {
        document.querySelector('.div-inicioProyecciones').classList.remove('input-error');
    }
    if (inputFechaFinPelicula.value == '') {
        estaVacio = true;
        document.querySelector('.div-finProyecciones').classList.add('input-error');
    } else {
        document.querySelector('.div-finProyecciones').classList.remove('input-error');
    }
    if (inputCalificacionPelicula.value == '0') {
        estaVacio = true;
        document.querySelector('.div-calificacionPelicula').classList.add('select-error');
    } else {
        document.querySelector('.div-calificacionPelicula').classList.remove('select-error');
    }
    if (inputTrailerPelicula.value == '') {
        estaVacio = true;
        document.querySelector('.div-trailerPelicula').classList.add('input-error');
    } else {
        document.querySelector('.div-trailerPelicula').classList.remove('input-error');
    }


    //Mensaje mostrado en caso de un campo vacío
    if (estaVacio == true) {
        Swal.fire({
            'icon': 'warning', //Entonces aparece un ícono de alerta
            'title': 'No ha podido iniciar sesión',
            'text': 'Por revise los campos resaltados',
            'confirmButtonText': 'Entendido',
        });
    } else {
        Swal.fire({
            'icon': 'success', //Entonces aparece un ícono de alerta
            'title': 'Película registrada',
            'confirmButtonText': 'Entendido',
        }).then(() => {
            window.location.href = 'mantenimientoCartelera.html';
        })
    };
};

botonGuardarPelicula.addEventListener('click', validarGuardarPeliculas);

//Validación de que el formulario de registro de salas no tenga campos vacíos
const inputSeleccionPelicula = document.querySelector('#seleccionPelicula');
const inputSeleccionHorario = document.querySelector('#seleccionHorario');
const inputIdiomaPelicula = document.querySelector('#idiomaPelicula');
const inputIdiomaSubtitulo = document.querySelector('#idiomaSubtitulo');
const inputTipoSala = document.querySelector('#tipoSala');
const botonGuardarSala = document.querySelector('#guardar-sala');

const validarGuardarSalas = () => {
    let estaVacio = false;
    //Validación de que no hay espacios vacíos
    if (inputSeleccionPelicula.value == '0') {
        estaVacio = true;
        document.querySelector('.div-seleccionPelicula').classList.add('select-error');
    } else {
        document.querySelector('.div-seleccionPelicula').classList.remove('select-error');
    }
    if (inputSeleccionHorario.value == '') {
        estaVacio = true;
        document.querySelector('.div-seleccionHorario').classList.add('input-error');
    } else {
        document.querySelector('.seleccionHorario').classList.remove('input-error');
    }
    if (inputIdiomaPelicula.value == '0') {
        estaVacio = true;
        document.querySelector('.div-idiomaPelicula').classList.add('select-error');
    } else {
        document.querySelector('.div-idiomaPelicula').classList.remove('select-error');
    }
    if (inputIdiomaSubtitulo.value == '0') {
        estaVacio = true;
        document.querySelector('.div-idiomaSubtitulo').classList.add('select-error');
    } else {
        document.querySelector('.div-idiomaSubtitulo').classList.remove('select-error');
    }
    if (inputTipoSala.value == '0') {
        estaVacio = true;
        document.querySelector('.div-tipoSala').classList.add('select-error');
    } else {
        document.querySelector('.div-tipoSala').classList.remove('select-error');
    }

    //Mensaje mostrado en caso de un campo vacío
    if (estaVacio == true) {
        Swal.fire({
            'icon': 'warning', //Entonces aparece un ícono de alerta
            'title': 'No ha podido iniciar sesión',
            'text': 'Por revise los campos resaltados',
            'confirmButtonText': 'Entendido',
        });
    } else {
        Swal.fire({
            'icon': 'success', //Entonces aparece un ícono de alerta
            'title': 'Película registrada',
            'confirmButtonText': 'Entendido',
        }).then(() => {
            window.location.href = 'mantenimientoCartelera.html';
        })
    };
};

botonGuardarSala.addEventListener('click', validarGuardarSalas);