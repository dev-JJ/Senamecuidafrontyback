'use strict'
require('mongoose-type-email');
const {Schema, model} = require("mongoose");
const ttl = require('mongoose-ttl');
require('mongoose-type-email');
const moment = require('moment');


const EncuestaCovidSchema = new Schema(
    {
        sintomas: {

            fiebre: {
                type: Boolean,
                required: true,
            },
            tos: {
                type: Boolean,
                required: true,
            },
            dolorTragar: {
                type: Boolean,
                required: true,
            },
            malestarGeneral: {
                type: Boolean,
                required: true,
            },
            dificultadRespirar: {
                type: Boolean,
                required: true,
            },
            gripa: {
                type: Boolean,
                required: true,
            },
            diarrea: {
                type: Boolean,
                required: true,
            },
            contactoSospechoso: {
                type: Boolean,
                required: true,
            },
            tratamiento: {
                type: Boolean,
                required: true,
            },
        },
        HORA: {
            type: String,
            default: moment().format('MMMM Do YYYY, h:mm:ss a'),
        }
    },

)

module.exports = model("EncuestaCovid", EncuestaCovidSchema);