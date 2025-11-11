import { Router } from 'express';
import { TitleController } from 'src/controllers/titleController';

const titleController = new TitleController();
const titleRouter = Router();

titleRouter.get('/', (req, res) => titleController.getTitles(req, res));
titleRouter.get('/:id', (req, res) => titleController.getTitleById(req, res));
titleRouter.post('/', (req, res) => titleController.createTitle(req, res));
titleRouter.put('/:id', (req, res) => titleController.updateTitle(req, res));
titleRouter.delete('/:id', (req, res) => titleController.deleteTitle(req, res));

export default titleRouter;
