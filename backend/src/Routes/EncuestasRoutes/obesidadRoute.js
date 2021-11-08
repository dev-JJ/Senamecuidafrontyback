'use strict'
require('mongoose-type-email');
const {Schema, model} = require("mongoose");
const ttl = require('mongoose-ttl');
require('mongoose-type-email');
const moment = require('moment');


const EncuestaObesidadSchema = new Schema(
    {
        peso: {
            type: String,
            required: true,
            max: 30,
        },

        estatura: {
            type: String,
            required: true,
            max: 30,
        },

        ejercicio: {

            no: {
                type: Boolean,
                required: true,
            },
            unaodos: {
                type: Boolean,
                required: true,
            },
            tresocuatro: {
                type: Boolean,
                required: true,
            },
            cincoseis: {
                type: Boolean,
                required: true,
            },
        },

        comidachatarra: {

            avecesfindesemana: {
                type: Boolean,
                required: true,
            },
            findesemana: {
                type: Boolean,
                required: true,
            },
            avecessemana: {
                type: Boolean,
                required: true,
            },
            casidiario: {
                type: Boolean,
                required: true,
            },
            diario: {
                type: Boolean,
                required: true,
            },
        },

        familiar: {

            no: {
                type: Boolean,
                required: true,
            },
            si: {
                type: Boolean,
                required: true,
            },
        },

        dieta: {

            no: {
                type: Boolean,
                required: true,
            },
            si: {
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

module.exports = model("EncuestaObesidad", EncuestaObesidadSchema);