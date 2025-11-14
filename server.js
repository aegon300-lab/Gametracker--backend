// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const juegoRoutes = require('./routes/juegoRoutes');
const resenaRoutes = require('./routes/resenaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'GameTracker API' }));

app.use('/api/juegos', juegoRoutes);
app.use('/api/resenas', resenaRoutes);

// Conexión DB y arrancar servidor
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI; // vendrá del .env

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Error conectando a MongoDB:', err.message);
    
  });
