const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  plataforma: String,
  genero: String,
  completado: { type: Boolean, default: false },
  horasJugadas: { type: Number, default: 0 },
  portada: String
}, { timestamps: true });

module.exports = mongoose.model('Juego', juegoSchema);
