const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/juegoController');

router.get('/', ctrl.obtenerJuegos);
router.post('/', ctrl.crearJuego);
router.put('/:id', ctrl.editarJuego);
router.delete('/:id', ctrl.eliminarJuego);

module.exports = router;
