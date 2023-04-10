const express = require('express');
const pino = require('pino-http')();
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use(pino);

app.use(routes);

module.exports = app;
