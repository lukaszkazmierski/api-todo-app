const express = require("express");
const routes = express.Router();
const todoRoutes = require('./todo.routes.ts');

routes.use('/todos', todoRoutes);

module.exports = routes;