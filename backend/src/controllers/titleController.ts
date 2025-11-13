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

      let categories: number[] = [];
      if (body.category) {
        categories = Array.isArray(body.category) ? body.category : [body.category];
      }

      let seasons: number[] = [];
      if (body.season) {
        seasons = Array.isArray(body.season) ? body.season : [body.season];
      }

      const title = await titleService.createTitle({
        ...body,
        category:
          categories.length > 0
            ? {
                connect: categories.map((categoryId: number) => ({ id: categoryId })),
              }
            : undefined,
        season:
          seasons.length > 0
            ? {
                connect: seasons.map((seasonId: number) => ({ id: seasonId })),
              }
            : undefined,
        video: body.video ? { connect: { id: body.video } } : undefined,
      });

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

      let categories: number[] = [];
      if (body.category) {
        categories = Array.isArray(body.category) ? body.category : [body.category];
      }

      let seasons: number[] = [];
      if (body.season) {
        seasons = Array.isArray(body.season) ? body.season : [body.season];
      }

      const currentTitle = await titleService.getTitleByIdIncludeAll(id);

      let categoriesToDisconnect: number[] = [];
      let seasonsToDisconnect: number[] = [];
      if (currentTitle) {
        categoriesToDisconnect = currentTitle.category
          .filter((category) => !categories.includes(category.id))
          .map((category) => category.id);
        seasonsToDisconnect = currentTitle.season
          .filter((season) => !seasons.includes(season.id))
          .map((season) => season.id);
      }

      const title = await titleService.updateTitle(id, {
        ...body,
        category:
          categories.length > 0 || categoriesToDisconnect.length > 0
            ? {
                disconnect: categoriesToDisconnect.map((id) => ({ id })),
                connect: categories.map((id) => ({ id })),
              }
            : undefined,
        season:
          seasons.length > 0 || seasonsToDisconnect.length > 0
            ? {
                disconnect: seasonsToDisconnect.map((season) => ({ id: season })),
                connect: seasons.map((season) => ({ id: season })),
              }
            : undefined,
        video: body.video
          ? {
              connect: { id: body.video },
            }
          : undefined,
      });

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
