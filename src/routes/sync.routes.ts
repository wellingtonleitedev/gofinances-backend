import { Router } from 'express';
// import CreateCategoryService from '../services/CreateCategoryService';

const syncRouter = Router();

syncRouter.get('/pull/:lastPulledAt', async (request, response) => {
  const { lastPulledAt } = request.params;

  console.log({ pull: lastPulledAt });
  // const createCategoryService = new CreateCategoryService();

  // const category = await createCategoryService.execute(title);

  return response.json();
});

syncRouter.post('/push/:lastPulledAt', async (request, response) => {
  const { lastPulledAt } = request.params;
  const { changes } = request.body;

  console.log({ push: lastPulledAt, changes });
  // const createCategoryService = new CreateCategoryService();

  // const category = await createCategoryService.execute(title);

  return response.json();
});

export default syncRouter;
