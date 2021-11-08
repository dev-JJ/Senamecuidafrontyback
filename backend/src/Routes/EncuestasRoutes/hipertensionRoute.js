'use strict'
require('mongoose-type-email');
const {Schema, model} = require("mongoose");
const ttl = require('mongoose-ttl');
require('mongoose-type-email');
const moment = require('moment');


const EncuestaHipertesionSchema = new Schema(
    {
        

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
            diario: {
                type: Boolean,
                required: true,
            },
        },

        presionarterial: {

            no: {
                type: Boolean,
                required: true,
            },
            si: {
                type: Boolean,
                required: true,
            },
        },

        diagnosticodiabetes: {

            no: {
                type: Boolean,
                required: true,
            },
            si: {
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

        HORA: {
            type: String,
            default: moment().format('MMMM Do YYYY, h:mm:ss a'),
        }
    },

)

module.exports = model("EncuestaHipertension", EncuestaHipertensionSchema);