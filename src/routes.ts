import { Router } from 'express';
import ClientController from './controllers/ClientController';

const routes = Router();

routes.post('/api/client', ClientController.createClient);
routes.get('/api/clients', ClientController.showAllClients);
routes.get('/api/client/:name', ClientController.showClient);
routes.put('/api/client/:id', ClientController.updateClient);
routes.delete('/api/client/:id', ClientController.deleteClient);

export const routesApi = routes;