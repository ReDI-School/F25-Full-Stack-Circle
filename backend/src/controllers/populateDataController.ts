import { $Enums } from '@prisma/client';
import { Request, Response } from 'express';
import { PopulateDataService } from 'src/services/populateDataService';

const populateDataService = new PopulateDataService();

export class PopulateDataController {
  async createManyTitle(req: Request, res: Response) {
    try {
      const body: {
        title: [
          {
            name: string;
            type: $Enums.VideoType;
            maturity: $Enums.AgeRestriction;
            cast: string[];
            genre: $Enums.Genre[];
            synopsis: string;
          },
        ];
        season: [{ title: string; thumbnail: string; number: number }];
        video: [
          {
            url: string;
            image: string;
            duration: number;
            episode_number: number;
            season_number: number;
            title: string;
          },
        ];
      } = req.body;

      // const titles = await populateDataService.createManyAndReturnTitles(body.title); // save all titles

      let titles: {
        name: string;
        type: $Enums.VideoType;
        cast: string[];
        genre: $Enums.Genre[];
        synopsis: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
      }[] = [];

      for (const t of body.title) {
        const { maturity, ...rest } = t;
        const title = await populateDataService.createTitle({
          ...rest,
          category: {
            connectOrCreate: [
              {
                where: { age_restriction: maturity },
                create: {
                  name: maturity,
                  age_restriction: maturity,
                },
              },
            ],
          },
        });
        titles.push(title);
      }

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
          image: v.image,
          url: v.url,
          episode_number: v.episode_number,
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
