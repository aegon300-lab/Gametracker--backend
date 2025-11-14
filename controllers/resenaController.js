const Resena = require('../models/Reseña');

exports.obtenerResenas = async (req, res) => {
  try {
    const resenas = await Resena.find().populate('juegoId', 'titulo');
    res.json(resenas);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.crearResena = async (req, res) => {
  try {
    const nueva = new Resena(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.editarResena = async (req, res) => {
  try {
    const actualizado = await Resena.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.eliminarResena = async (req, res) => {
  try {
    await Resena.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reseña eliminada' });
  } catch (err) { res.status(400).json({ error: err.message }); }
};
