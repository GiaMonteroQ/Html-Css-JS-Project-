'use strict';

const express = require('express');
const Idioma = require('../models/idiomas.model');
const router = express.Router();

router.post('/registrar-idioma', (req, res) => {

    let nuevoIdioma = new Idioma({
        codigoIdioma: req.body.codigoIdioma,
        nombreIdioma: req.body.nombreIdioma
    });

    nuevoIdioma.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el idioma',
                error
            });
        } else {
            res.json({
                msj: 'Idioma registrado con éxito'
            });

        }
    });

});

// Ruta para obtener la información de todos los idiomas
router.get('/obtener-idioma', (req, res) => {

    Idioma.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo consultar el idioma',
                error
            });
        } else {
            res.json({
                msj: 'Idiomas listados correctamente',
                lista
            });
        }

    });

});

// Ruta para modificar la información de un usuario
router.put('/actualizar-idioma', (req, res) => {});

// Ruta para eliminar la información de un usuario
router.delete('/eliminar-idioma', (req, res) => {
    Idioma.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'No se eliminar el idioma',
                error
            });
        } else {
            res.json({
                msj: 'Idioma eliminado con éxito'
            });
        }
    });
});

module.exports = router;