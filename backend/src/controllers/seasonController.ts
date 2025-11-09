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
}
