'use strict'
require('mongoose-type-email');
const {Schema, model} = require("mongoose");
const ttl = require('mongoose-ttl');
require('mongoose-type-email');
const moment = require('moment');


const asistenciaMedicaSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            max: 30
        },
        documentoIdentidad: {
            type: String,
            required: true,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        telefono: {
            type: String,
            required: true,
            max: 50
        },
        direccionResidencia: {
            type: String,
            required: true,
            max: 50
        },
        eps: {
            type: String,
            required: true,
            max: 30
        },
        HORA: {
            type: String,
            default: moment().format('MMMM Do YYYY, h:mm:ss a'),
        }
    }
)

module.exports = model("AsistenciaMedica", asistenciaMedicaSchema);