const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Juego', required: true },
  usuario: { type: String, default: 'Anónimo' },
  comentario: String,
  estrellas: { type: Number, min: 1, max: 5 }
}, { timestamps: true });

module.exports = mongoose.model('Resena', resenaSchema);
//comit 2.2