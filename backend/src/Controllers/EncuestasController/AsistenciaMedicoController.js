const SaludController = {}
const Aprendiz = require('../../Models/Encuestas/tlb_asistencia_medica')
const moment = require('moment-timezone');

AsistenciaMedicoController.AsistenciaCreate = async (req, res) => {

    let asistenciamedico = new asistenciamedico(
        (
            {
                nombre: body.nombre,
                sexo: body.sexo,
                email: body.email,
                documentoIdentidad: body.documentoIdentidad,
                telefono: body.telefono,
                direccion: body.direccion,
                eps: body.eps,

            }
        )
    );


// ------------- save public in the database -----------

    asistenciamedico
        .save()
        .then(data => {
            res.send("¡Su registro se ha guardado exitosamente!");
        })
        .then(dat => {
            emailSend(body);

            Visitante.findOneAndUpdate({email: body.email}, (err, usuario) => {
                if (err) return res.status(500).send({message: 'err'})
            })
            return res.send("Ok")
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                console.log(err);
                return res.status(409).send(err.keyValue);
            }
        })
}

module.exports = AsistenciaMedicoController
