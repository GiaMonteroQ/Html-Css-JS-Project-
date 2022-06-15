"use strict";
// Para validar si los campos estan llenos //
const inputNombre = document.querySelector('#txt-nombre');
const inputSegundoNombre = document.querySelector('#txt-SegundoNombre');
const inputapellido = document.querySelector('#txt-apellido');
const inputSegundoApellido = document.querySelector('#txt-SegundoApellido');
const inputTelefono = document.querySelector('#txt-telefono');
const inputCorreo = document.querySelector('#txt-correo');
const inputPassword = document.querySelector('#txt-password');
const inputConfirmPassword = document.querySelector('#txt-confirmPassword');
const inputCheckBox = document.querySelector('#checkbox');
const inputTipoID = document.querySelector('#tipoIDSelector');
const inputUserId = document.querySelector('#userid');
const inputDOB = document.querySelector('#fechaNacimiento');
const botonGuardar = document.querySelector('#txt-guardar');

const validarCampos = () => {
    let error = false;

    //condicion que valida nombre
    if (inputNombre.value == '') {
        error = true;
        document.querySelector('.div-nombre').classList.add('input-error');
    } else {
        document.querySelector('.div-nombre').classList.remove('input-error');
    }
    //condicion que valida apellido
    if (inputapellido.value == "") {
        error = true;
        document.querySelector(".div-apellido").classList.add("input-error");
    } else {
        document.querySelector(".div-apellido").classList.remove("input-error");
    }

    //condicion que valida telefono
    if (inputTelefono.value == "") {
        error = true;
        document.querySelector(".div-telefono").classList.add("input-error");
    } else {
        document.querySelector(".div-telefono").classList.remove("input-error");
    }
    //condicion que valida correo
    if (inputCorreo.value == "") {
        error = true;
        document.querySelector(".div-correo").classList.add("input-error");
    } else {
        document.querySelector(".div-correo").classList.remove("input-error");
    }
    //condicion que valida password
    if (inputPassword.value == "") {
        error = true;
        document.querySelector(".div-password").classList.add("input-error");
    } else {
        document.querySelector(".div-password").classList.remove("input-error");
    }
    //condicion que valida confirmacion de password
    if (inputConfirmPassword.value == "") {
        error = true;
        document.querySelector(".div-confirmPassword").classList.add("input-error");
    } else {
        document.querySelector(".div-confirmPassword").classList.remove("input-error");
    }

    if (inputCheckBox.value == '') {
        error = true;
        document.querySelector(".div-check").classList.add("input-error");
    } else {
        document.querySelector(".div-check").classList.remove("input-error");
    }

    //condicion que valida identificacion
    if (inputTipoID.value == "0") {
        error = true;
        document.querySelector(".div-tipoid").classList.add("select-error");
    } else {
        document.querySelector(".div-tipoid").classList.remove("select-error");
    }
    if (inputUserId.value == "") {
        error = true;
        document.querySelector(".div-userid").classList.add("input-error");
    } else {
        document.querySelector(".div-userid").classList.remove("input-error");
    }

    if (inputDOB.value == "") {
        error = true;
        document.querySelector(".div-date").classList.add("input-error");
    } else {
        document.querySelector(".div-date").classList.remove("input-error");
    }

    //condicion que valida si hay error o no
    if (error == true) {
        Swal.fire({
            "icon": "warning",
            "title": "No ha podido registrar su usuario",
            "text": "Por favor revise los espacios marcados",
            "confirmButtonText": "Entendido!"
        });
    } else {
        Swal.fire({
            'icon': 'success', //Entonces aparece un ícono de alerta
            'title': 'Usuario ha sido registrado',
            'confirmButtonText': 'Entendido',
        }).then(() => {
            window.location.href = '/menu/menuCartelera.html';
        })
    }
};
botonGuardar.addEventListener("click", validarCampos);