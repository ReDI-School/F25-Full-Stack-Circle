import { Request, Response } from 'express';
import { TitleService } from 'src/services/titleService';

const titleService = new TitleService();

export class TitleController {
  async getTitles(req: Request, res: Response) {
    try {
      const titles = await titleService.getAllTitles();
      res.json({ titles });
    } catch (error) {
      console.error('Error fetching titles:', error);
      res.status(500).json({ error: 'Failed to fetch titles.' });
    }
  }

  async getTitleById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const title = await titleService.getTitleById(id);
      if (!title) return res.status(404).json({ error: 'Title not found.' });
      res.json({ title });
    } catch (error) {
      console.error('Error fetching title:', error);
      res.status(500).json({ error: 'Failed to fetch title.' });
    }
  }

  async createTitle(req: Request, res: Response) {
    try {
      const body = req.body;
      const title = await titleService.createTitle(body);
      res.status(201).json({ title });
    } catch (error) {
      console.error('Error creating title:', error);
      res.status(500).json({ error: 'Failed to create title.' });
    }
  }

  async updateTitle(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const title = await titleService.updateTitle(id, body);
      res.json({ title });
    } catch (error) {
      console.error('Error updating title:', error);
      res.status(500).json({ error: 'Failed to update title.' });
    }
  }

  async deleteTitle(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await titleService.deleteTitle(id);
      res.json({ message: 'Title deleted successfully.' });
    } catch (error) {
      console.error('Error deleting title:', error);
      res.status(500).json({ error: 'Failed to delete title.' });
    }
  }
}
