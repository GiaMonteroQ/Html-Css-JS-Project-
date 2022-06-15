'use strict';

const mongoose = require('mongoose');

let schemaCadena = new mongoose.Schema({
    codigoCadena: { type: Number, required: true },
    nombreCadena: { type: String, required: true },
    nombreLugarCadena: { type: String, required: true }
});

module.exports = new mongoose.model('Cadena', schemaIdioma, 'cadenas');