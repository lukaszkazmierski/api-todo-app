const Router = require('express').Router;
import TodoRoutes from './todo.routes'

const routes = Router();
routes.use('/todos', TodoRoutes);

export default routes;