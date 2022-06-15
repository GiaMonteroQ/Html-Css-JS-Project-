'use strict';

const express = require('express');
const Idioma = require('../models/cadenas.model');
const router = express.Router();

router.post('/registrar-cadena', (req, res) => {

    let nuevoCadena = new Cadena({
        codigoCadena: req.body.codigoCadena,
        nombreCadena: req.body.nombreCadena,
        nombreLugarCadena:req.body.nombreLugarCadena
    });

    nuevoCadena.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar la cadena de cine',
                error
            });
        } else {
            res.json({
                msj: 'Cadena de cine ha sido registrado con éxito'
            });

        }
    });

});

// Ruta para obtener la información de todos los idiomas
router.get('/obtener-cadena', (req, res) => {

    Idioma.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo consultar la cadena de cine',
                error
            });
        } else {
            res.json({
                msj: 'La cadena de cine fue listada correctamente',
                lista
            });
        }

    });

});

// Ruta para modificar la información de un usuario
router.put('/actualizar-cadena', (req, res) => {});

// Ruta para eliminar la información de un usuario
router.delete('/eliminar-cadena', (req, res) => {
    Cadena.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'No se eliminar la cadena de cine',
                error
            });
        } else {
            res.json({
                msj: 'La cadena de cine ha sido eliminado con éxito'
            });
        }
    });
});

module.exports = router;