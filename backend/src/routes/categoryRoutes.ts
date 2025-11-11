import { Router } from 'express';
import { CategoryController } from '../controllers/categoryController';

const categoryController = new CategoryController();
const categoryRouter = Router();

// GET /category
categoryRouter.get('/', (req, res) => categoryController.getAllCategories(req, res));

// GET /category/:id
categoryRouter.get('/:id', (req, res) => categoryController.getCategoryById(req, res));

// POST /category
categoryRouter.post('/', (req, res) => categoryController.createCategory(req, res));

// PUT /category/:id
categoryRouter.put('/:id', (req, res) => categoryController.updateCategory(req, res));

// DELETE /category/:id
categoryRouter.delete('/:id', (req, res) => categoryController.deleteCategory(req, res));

export default categoryRouter;
