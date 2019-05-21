const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando a App
const app = express();

// Permite que enve json
app.use(express.json());
app.use(cors());

// Inciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);

