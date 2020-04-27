import { Router } from 'express';
import SecretEscapesController from './controllers/SecretEscapes.controller';
import errorHandler from './middleware/error-handler';

const routes = new Router();

// Beauty SecretEscapes
routes.post('/api/SecretEscapes/insert', SecretEscapesController.insert);
routes.post('/api/SecretEscapes/update/:SecretEscapesId', SecretEscapesController.update);
routes.post('/api/SecretEscapes/delete', SecretEscapesController.delete);
routes.get('/api/SecretEscapes', SecretEscapesController.getAll);



routes.use(errorHandler);

export default routes;
