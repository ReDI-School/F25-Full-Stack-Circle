import { $Enums, VideoType } from '@prisma/client';
import { Request, Response } from 'express';
import { PopulateDataService } from 'src/services/populateDataService';

const populateDataService = new PopulateDataService();

export class PopulateDataController {
  async createManyTitle(req: Request, res: Response) {
    try {
      const body: {
        title: [{ name: string; type: VideoType }];
        season: [{ title: string; thumbnail: string; number: number }];
        video: [
          {
            duration: number;
            url: string;
            episode_number: number;
            season_number: number;
            title: string;
          },
        ];
      } = req.body;

      const titles = await populateDataService.createManyAndReturnTitles(body.title); // save all titles

      let seasons: Array<
        {
          title: {
            id: number;
            name: string;
            type: $Enums.VideoType;
            createdAt: Date;
            updatedAt: Date;
          } | null;
        } & {
          number: number;
          id: number;
          createdAt: Date;
          updatedAt: Date;
          thumbnail: string;
          title_id: number | null;
        }
      > = [];

      // loops through all the seasons and connect to the title id.
      // we can't use createMany here because the connect feature is not available in createMany
      for (const s of body.season) {
        const season = await populateDataService.createSeason({
          ...s,
          title: {
            connect: {
              id: titles.find((t) => t.name === s.title && t.type === 'SERIES')?.id,
            },
          },
        });

        seasons.push(season);
      }

      for (const v of body.video) {
        await populateDataService.createVideo({
          duration: v.duration,
          url: v.url,
          name:
            v.episode_number != null
              ? `${v.title}: S${v.season_number} Ep${v.episode_number}`
              : v.title,
          season:
            v.episode_number != null
              ? {
                  connect: {
                    id: seasons.find((s) => {
                      return s.title?.name === v.title && s.number === v.season_number;
                    })?.id,
                  },
                }
              : undefined,
          title:
            v.episode_number == null
              ? {
                  connect: {
                    id: titles.find((t) => t.name === v.title)?.id,
                  },
                }
              : undefined,
        });
      }

      res.status(201).json({ titles, seasons });
    } catch (error) {
      console.error('Error creating titles: ', error);
      res.status(500).send({ error: 'Failed to create titles.' });
    }
  }
}
