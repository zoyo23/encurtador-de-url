const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const EncurtadorController = require('./controllers/EncurtadorController');

const routes = express.Router();

routes.get('/', EncurtadorController.index);

routes.get('/favicon.ico', (req, res) => res.sendStatus(200));

routes.get('/:resumeUrl', EncurtadorController.buscarRedirect);

routes.post('/resume', EncurtadorController.encurtar);

module.exports = routes;