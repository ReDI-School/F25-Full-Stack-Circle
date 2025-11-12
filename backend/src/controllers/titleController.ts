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

      const currentTitle = await titleService.getTitleByIdIncludeAll(id);

      let currentCategories: number[] = [];
      let currentSeasons: number[] = [];
      if (currentTitle) {
        currentCategories = currentTitle.category.map((category) => category.id);
        currentSeasons = currentTitle.season.map((season) => season.id);
      }

      let categories: number[] = [];
      if (body.category) {
        categories = Array.isArray(body.category) ? body.category : [body.category];
      }

      let seasons: number[] = [];
      if (body.season) {
        seasons = Array.isArray(body.season) ? body.season : [body.season];
      }

      console.log('current', currentSeasons, seasons);

      const title = await titleService.updateTitle(id, {
        ...body,
        category:
          categories.length > 0 // User adds 1 or more category
            ? {
                // Disconnects/removes the currently set categories
                // Order here is important (disconnect before connect) else it will connect then disconnect the same category id. Only happens for the same id.
                disconnect: currentCategories.map((category) => ({ id: category })),
                // Connects/adds new categories
                connect: categories.map((category) => ({ id: category })),
              }
            : currentCategories.length > 0 // User wants to remove all the category then we should disconnect the current categories (if length > 0)
              ? {
                  disconnect: currentCategories.map((category) => ({ id: category })),
                }
              : undefined,
        season:
          seasons.length > 0
            ? {
                disconnect: currentSeasons.map((season) => ({ id: season })),
                connect: seasons.map((season) => ({ id: season })),
              }
            : currentSeasons.length > 0
              ? {
                  disconnect: currentSeasons.map((season) => ({ id: season })),
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
