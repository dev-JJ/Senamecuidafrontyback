const CovidController = {}
const covid = require('../../Models/Encuestas/tbl_EncuestaCovid')
const moment = require('moment-timezone');

CovidController.ActualizarEstado = async (req, res) => {

    const {body} = req
    let dato = new Date()
    let date_ob = moment.tz(dato, "America/Bogota").locale('es').format('MMMM Do YYYY, h:mm:ss a')
    console.log(date_ob)

    const Sintomas = {
        sintomas: {
            fiebre: body.fiebre,
            Tos: body.Tos,
            horaActualizacion:date_ob ,
            DolorTragar: body.DolorTragar,
            MalestarGeneral: body.MalestarGeneral,
            DificultadRespirar: body.DificultadRespirar,
            Gripa: body.Gripa,
            Diarrea: body.Diarrea,
            ContactoSospechoso: body.ContactoSospechoso,
            tratamiento: body.DolorArticular
        }
    }

    encCovid.save()
        .then(data => {
            res.send("¡Su registro se ha guardado exitosamente!");
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                console.log(err);
                return res.status(409).send(err.keyValue);
            }
            console.log(err);
        })
}
module.exports = SaludController
