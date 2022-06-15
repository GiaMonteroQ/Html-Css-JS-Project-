'use strict';

const express = require('express');
const Usuario = require('../models/usuarios.model');
const router = express.Router();

router.post('/registrar-usuario', (req, res) => {

    let nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        nacimiento: req.body.nacimiento,
        rol: req.body.rol,
        estado: req.body.estado,
        contrasenna: req.body.contrasenna
    });

    nuevoUsuario.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuario registrado con éxito'
            });

        }
    });

});

// Ruta para obtener la información de todos los usuarios
router.get('/obtener-usuarios', (req, res) => {

    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo consultar el listado de usuarios',
                error
            });
        } else {
            res.json({
                msj: 'Usuarios listados correctamente',
                lista
            });
        }

    });

});

// Ruta para modificar la información de un usuario
router.put('/actualizar-usuario', (req, res) => {});

// Ruta para eliminar la información de un usuario
router.delete('/eliminar-usuario', (req, res) => {
    Usuario.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'No se eliminar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuarios eliminado con éxito'
            });
        }
    });
});

module.exports = router;