
require('dotenv').config();
const mongoose = require('mongoose');
const Juego = require('./models/Juego');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(async () => {
  await Juego.deleteMany({});
  await Juego.insertMany([
    { titulo: 'The Legend of Zelda', plataforma: 'Switch', genero: 'Aventura', horasJugadas: 120 },
    { titulo: 'Hollow Knight', plataforma: 'PC', genero: 'Metroidvania', horasJugadas: 60 }
  ]);
  console.log('Seed complete');
  mongoose.disconnect();
}).catch(console.error);
