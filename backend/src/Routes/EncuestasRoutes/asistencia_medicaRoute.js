const express = require('express');
const router = express.Router();

// --------- Import the controllers ----------
const AsistenciaMedicoController = require('../../Controllers/EncuentasController/AsistenciaMedicoController');
const { userAuth, checkRole } = require('../../Utils/Auth');

router.route("/create").post(AsistenciaMedicoController.AsistenciaCreate);


module.exports = router;