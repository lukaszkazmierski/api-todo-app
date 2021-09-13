import { Router } from 'express';
import TodoRoutes from './todo.routes'

const routes = Router();
routes.use('/todos', TodoRoutes);

export default routes;