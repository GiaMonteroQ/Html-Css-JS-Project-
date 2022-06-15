const registrarIdioma = async(pdatos, pendPoint, pUrlRedireccion) => {

    let url = `http://localhost:3000/api${pendPoint}`;

    await axios({
        'method': 'post',
        'url': url,
        'data': pdatos
    })
    .then(response=>{
        Swal.fire({
            'icon':'sucess',
            'title': 'El idioma fue registrado exitosamente',
            'text': response.msj
        }).then(()=>
        {window.location.href = pUrlRedireccion;
        });
        
    })
    .catch(error=>{
        Swal.fire({
            'icon':'error',
            'title': 'No se pudo registrar el idioma',
            'text':`Ocurrió el siguiente error ${error}`
        });
    });
};


"use strict";
const obtenerNombreRol = (idRol) => {
    let nombreRol = "";

    switch (idRol) {
        case 1:
            nombreRol = "super administrador"
            break;
        case 2:
            nombreRol = "administrador"
            break;
        case 3:
            nombreRol = "usuario"
            break;
    }
    return nombreRol;
}
const obtenerNombreEstado = (idEstado) => {
    let nombreEstado = '';

    switch (idEstado) {
        case 1:
            nombreEstado = 'Activo';
            break;
        case 2:
            nombreEstado = 'Inactivo';
            break;
        case 3:
            nombreEstado = 'Pendiente de aprobación';
            break;
        case 4:
            nombreEstado = 'Pendiente de cambio de contraseña';
            break;
    }
    return nombreEstado;
};

const obtenerUsuarios = () => listaUsuarios;

const validarRol = (idRol) => {
    switch (idRol) {
        case 1:
            window.location.href = "/html/menus/menuDeAdmin.html ";
            break;
        case 2:
            window.location.href = "/html/menus/menuDeAdmin.html ";
            break;
        case 3:
            window.location.href = "/html/menus/menuCartelera.html ";
            break;
    }
};

const validarestado = (estado) => {
    switch (estado) {
        case 1:
            validarRol(idRol);
        case 2:
            Swal.fire({
                "icon": "info",
                "title": "No ha podido iniciar sesión",
                "text": "Su usuario se encuentra inactivo, favor contacte al admistrador",
            });
            break;
        case 3:
            Swal.fire({
                "icon": "info",
                "title": "No ha podido iniciar sesión",
                "text": "Su usuario se encuentra pendiente de aprobación",
            });
            break;
        case 4:
            Swal.fire({
                "icon": "info",
                "title": "No ha podido iniciar sesión",
                "text": "Debe realizar el cambio de contraseña",
            }).then(() => {
                window.location.href = "cambiar-contrasenna.html"; //html que yo quiera//
            });
            break;
    }
};

const validarCredenciales = (correo, contrasenna) => {
    let ingresar = false;
    let estado = 0;
    listaUsuarios.forEach(objusuario => {
        if (objusuario.correo == correo && objusuario.contrasenna == contrasenna) {
            estado = objusuario.estado;
            idRol = objusuario.rol;
            ingresar = true;
        }
    });

    if (ingresar == false) {
        Swal.fire({
            "icon": "error",
            "title": "No ha podido iniciar sesión",
            "text": "Usuario o Contraseña incorrectos",
        });
    } else {
        validarestado(estado); //validar estado es una funcion//

    }
};


//Codigo para las cadenas de cine//

const registrarCadena = async(pdatos, pendPoint, pUrlRedireccion) => {

    let url = `http://localhost:3000/api${pendPoint}`;

    await axios({
        'method': 'post',
        'url': url,
        'data': pdatos
    })
    .then(response=>{
        Swal.fire({
            'icon':'sucess',
            'title': 'La cadena de cine fue registrado exitosamente',
            'text': response.msj
        }).then(()=>
        {window.location.href = pUrlRedireccion;
        });
        
    })
    .catch(error=>{
        Swal.fire({
            'icon':'error',
            'title': 'No se pudo registrar la cadena de cine',
            'text':`Ocurrió el siguiente error ${error}`
        });
    });
};
