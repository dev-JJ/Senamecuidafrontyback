'use strict'
require('mongoose-type-email');
const {Schema, model} = require("mongoose");
const ttl = require('mongoose-ttl');
require('mongoose-type-email');
const moment = require('moment');


const EncuestaDiabetesSchema = new Schema(
    {
        sintomas: {

            presionarterial: {
                type: Boolean,
                required: true,
            },
            embarazo: {
                type: Boolean,
                required: true,
            },
            colesterol: {
                type: Boolean,
                required: true,
            },
            examenglucosa: {
                type: Boolean,
                required: true,
            },
            antecedentes: {
                type: Boolean,
                required: true,
            },
            pariente: {
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

module.exports = model("EncuestaDiabetes", EncuestaDiabetesSchema);