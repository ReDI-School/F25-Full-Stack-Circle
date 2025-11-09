import { Request, Response } from 'express';
import { SeasonService } from '../services/seasonService';

const seasonService = new SeasonService();

export class SeasonController {
  async getAllSeasons(req: Request, res: Response) {
    try {
      const seasons = await seasonService.getAllSeasons();
      res.status(200).json({ seasons });
    } catch (error) {
      console.log('Error fetching seasons:', error);
      res.status(500).json({ error: 'Failed to fetch seasons' });
    }
  }

  async getSeasonById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid season ID' });
      }
      const season = await seasonService.getSeasonById(id);
      if (!season) {
        return res.status(404).json({ error: 'Season not found' });
      }
      res.status(200).json(season);
    } catch (error) {
      console.log('Error fetching season:', error);
      res.status(500).json({ error: 'Failed to fetch season' });
    }
  }

  async createSeason(req: Request, res: Response) {
    try {
      const { number, thumbnail, title_id } = req.body;
      if (!number || !thumbnail || !title_id) {
        return res.status(400).json({ error: 'Missing required data' });
      }

      const newSeason = await seasonService.createSeason({
        number: Number(number),
        thumbnail,
        title_id: Number(title_id),
      });
      res.status(201).json(newSeason);
    } catch (error) {
      console.log('Error creating new season:', error);
      res.status(500).json({ error: 'Failed to create new season' });
    }
  }

  async updateSeason(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { number, thumbnail, title_id } = req.body;
      const updatedSeason = await seasonService.updateSeason(id, { number, thumbnail, title_id });
      res.status(200).json(updatedSeason);
    } catch (error) {
      console.error('Error updating season:', error);
      res.status(500).json({ error: 'Failed to update season' });
    }
  }

  async deleteSeason(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await seasonService.deleteSeason(id);
      res.json({ message: 'Season deleted successfully' });
    } catch (error) {
      console.error('Error deleting season:', error);
      res.status(500).json({ error: 'Failed to delete season' });
    }
  }
}
