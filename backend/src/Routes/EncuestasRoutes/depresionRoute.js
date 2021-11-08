'use strict'
require('mongoose-type-email');
const {Schema, model} = require("mongoose");
const ttl = require('mongoose-ttl');
require('mongoose-type-email');
const moment = require('moment');


const EncuestaDepresionSchema = new Schema(
    {
        sintomas: {

            perdidainteres: {
                type: Boolean,
                required: true,
            },
            altibajos: {
                type: Boolean,
                required: true,
            },
            faltaconcentracion: {
                type: Boolean,
                required: true,
            },
            malpeso: {
                type: Boolean,
                required: true,
            },
            somnolencia: {
                type: Boolean,
                required: true,
            },
            aislamiento: {
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

module.exports = mongoose.model("EncuestaDepresion", EncuestaDepresionSchema);