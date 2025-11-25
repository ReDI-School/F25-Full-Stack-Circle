import { Request, Response } from 'express';
import { CategoryService } from '../services/categoryService';
import { AgeRestriction } from '@prisma/client';

const categoryService = new CategoryService();

export class CategoryController {
  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json({ categories });
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  }

  async getCategoryById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid category ID' });
      }
      const category = await categoryService.getCategoryById(id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json({ category });
    } catch (error) {
      console.error('Error fetching category:', error);
      res.status(500).json({ error: 'Failed to fetch category' });
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const { name, age_restriction } = req.body;
      if (!name || !age_restriction) {
        return res.status(400).json({ error: 'Missing required data' });
      }
      if (typeof name !== 'string') {
        return res.status(400).json({ error: "Field 'name' must be a string." });
      }
      if (!(Object.values(AgeRestriction) as string[]).includes(age_restriction)) {
        return res.status(400).json({ error: "Field 'age_restriction' has invalid value." });
      }

      const category = await categoryService.createCategory({
        name,
        age_restriction,
      });
      res.status(201).json({ category });
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Failed to create category' });
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, age_restriction } = req.body;

      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid category ID' });
      }

      const updateData: Partial<{
        name: string;
        age_restriction: AgeRestriction;
      }> = {};

      if (name !== undefined) {
        if (typeof name !== 'string') {
          return res.status(400).json({ error: "Field 'name' must be a string." });
        }
        updateData.name = name;
      }

      if (age_restriction !== undefined) {
        if (!(Object.values(AgeRestriction) as string[]).includes(age_restriction)) {
          return res.status(400).json({ error: "Field 'age_restriction' has invalid value." });
        }
        updateData.age_restriction = age_restriction;
      }

      const category = await categoryService.updateCategory(id, updateData);
      res.status(200).json({ category });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ error: 'Failed to update category' });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid category ID' });
      }
      await categoryService.deleteCategory(id);
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ error: 'Failed to delete category' });
    }
  }
}
