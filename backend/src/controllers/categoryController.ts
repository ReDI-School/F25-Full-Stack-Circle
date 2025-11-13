import { Request, Response } from 'express';
import { CategoryService } from '../services/categoryService';

const categoryService = new CategoryService();

export class CategoryController {

  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllCategories();
      res.json({ categories });
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  }

  async getCategoryById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const category = await categoryService.getCategoryById(id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json({ category });
    } catch (error) {
      console.error('Error fetching category:', error);
      res.status(500).json({ error: 'Failed to fetch category' });
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const body = req.body;
      const category = await categoryService.createCategory(body);
      res.status(201).json({ category });
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Failed to create category' });
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const category = await categoryService.updateCategory(id, body);
      res.json({ category });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ error: 'Failed to update category' });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await categoryService.deleteCategory(id);
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ error: 'Failed to delete category' });
    }
  }
}
