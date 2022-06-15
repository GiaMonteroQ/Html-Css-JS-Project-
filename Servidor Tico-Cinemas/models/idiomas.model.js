'use strict';

const mongoose = require('mongoose');

let schemaIdioma = new mongoose.Schema({
    codigoIdioma: { type: Number, required: true },
    nombreIdioma: { type: String, required: true }
});

module.exports = new mongoose.model('Idioma', schemaIdioma, 'idiomas');