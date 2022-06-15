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
const inputNombreUsuario = document.querySelector('#nombreUsuario');
const inputPrimerApellido = document.querySelector('#primerApellido');
const inputRol = document.querySelector('#rol');
const inputTipoID = document.querySelector('#tipoID');
const inputNumeroID = document.querySelector('#numeroID');
const inputEmail = document.querySelector('#email');
const inputFechaNacimiento = document.querySelector('#fechaNacimiento');
const inputCelular = document.querySelector('#celular');
const botonGuardarUsuario = document.querySelector('#guardar-usuarios');

const validarGuardarUsuario = () => {
    let estaVacio = false;
    //Validación de que no hay espacios vacíos
    if (inputNombreUsuario.value == '') {
        estaVacio = true;
        document.querySelector('.div-nombreUsuario').classList.add('input-error');
    } else {
        document.querySelector('.div-nombreUsuario').classList.remove('input-error');
    }
    if (inputPrimerApellido.value == '') {
        estaVacio = true;
        document.querySelector('.div-primerApellido').classList.add('input-error');
    } else {
        document.querySelector('.div-primerApellido').classList.remove('input-error');
    }
    if (inputRol.value == '0') {
        estaVacio = true;
        document.querySelector('.div-rol').classList.add('select-error');
    } else {
        document.querySelector('.div-rol').classList.remove('select-error');
    }
    if (inputEmail.value == '') {
        estaVacio = true;
        document.querySelector('.div-email').classList.add('input-error');
    } else {
        document.querySelector('.div-email').classList.remove('input-error');
    }
    if (inputTipoID.value == '0') {
        estaVacio = true;
        document.querySelector('.div-tipoID').classList.add('select-error');
    } else {
        document.querySelector('.div-tipoID').classList.remove('select-error');
    }
    if (inputNumeroID.value == '') {
        estaVacio = true;
        document.querySelector('.div-numeroID').classList.add('input-error');
    } else {
        document.querySelector('.div-numeroID').classList.remove('input-error');
    }

    if (inputFechaNacimiento.value == '') {
        estaVacio = true;
        document.querySelector('.div-fechaNacimiento').classList.add('input-error');
    } else {
        document.querySelector('.div-fechaNacimiento').classList.remove('input-error');
    }
    if (inputCelular.value == '') {
        estaVacio = true;
        document.querySelector('.div-celular').classList.add('input-error');
    } else {
        document.querySelector('.div-celular').classList.remove('input-error');
    }

    console.log(botonGuardarUsuario);
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
            window.location.href = 'registroMantenimientoDeUsuario.html';
        })
    };
};

botonGuardarUsuario.addEventListener('click', validarGuardarUsuario);