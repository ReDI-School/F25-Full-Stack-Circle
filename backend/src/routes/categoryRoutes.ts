import { Router } from 'express';
import { CategoryController } from '../controllers/categoryController';

const categoryController = new CategoryController();
const categoryRouter = Router();


categoryRouter.get('/', (req, res) => categoryController.getAllCategories(req, res));
categoryRouter.get('/:id', (req, res) => categoryController.getCategoryById(req, res));
categoryRouter.post('/', (req, res) => categoryController.createCategory(req, res));
categoryRouter.put('/:id', (req, res) => categoryController.updateCategory(req, res));
categoryRouter.delete('/:id', (req, res) => categoryController.deleteCategory(req, res));

export default categoryRouter;
