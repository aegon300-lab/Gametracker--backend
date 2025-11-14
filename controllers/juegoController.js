const Juego = require('../models/Juego');

exports.obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.crearJuego = async (req, res) => {
  try {
    const nuevo = new Juego(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.editarJuego = async (req, res) => {
  try {
    const actualizado = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.eliminarJuego = async (req, res) => {
  try {
    await Juego.findByIdAndDelete(req.params.id);
    res.json({ message: 'Juego eliminado' });
  } catch (err) { res.status(400).json({ error: err.message }); }
};
