const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/resenaController');

router.get('/', ctrl.obtenerResenas);
router.post('/', ctrl.crearResena);
router.put('/:id', ctrl.editarResena);
router.delete('/:id', ctrl.eliminarResena);

module.exports = router;
