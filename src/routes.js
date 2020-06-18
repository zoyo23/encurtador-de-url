const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const EncurtadorController = require('./controllers/EncurtadorController');

const routes = express.Router();

routes.get('/', EncurtadorController.index);

module.exports = routes;