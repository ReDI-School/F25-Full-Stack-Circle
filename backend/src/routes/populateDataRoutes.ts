import { Router } from 'express';
import { PopulateDataController } from 'src/controllers/populateDataController';

const populateDataController = new PopulateDataController();
const populateDataRouter = Router();

populateDataRouter.post('/', (req, res) => populateDataController.createManyTitle(req, res));

export default populateDataRouter;
