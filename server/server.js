// eslint-disable-next-line no-undef
require('dotenv').config();
// eslint-disable-next-line no-undef
const express = require('express');
const app = express();
// const db = require('./config/pokedexConfig');
// eslint-disable-next-line no-undef
const cors = require('cors');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(db);
// eslint-disable-next-line no-undef
app.use('/', require('./routes/api/pokedex'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));