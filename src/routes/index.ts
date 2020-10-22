import { Router } from 'express';

import categoriesRouter from './categories.routes';
import syncRouter from './sync.routes';
import transactionsRouter from './transactions.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/transactions', transactionsRouter);
routes.use('/sync', syncRouter);

export default routes;
