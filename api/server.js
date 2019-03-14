const express = require('express');

const configureMiddleware = require('../config/middleware.js');

const server = express();

configureMiddleware(server);

server.use('/prisons', prisonsRouter);
server.use('/prisoners', prisonersRouter);

module.exports = server;