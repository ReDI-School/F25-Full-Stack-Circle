import { Prisma } from '@prisma/client';
import prisma from 'src/libs/prisma';

export class PopulateDataService {
  async createManyAndReturnTitles(data: Prisma.TitleCreateManyInput[]) {
    return await prisma.title.createManyAndReturn({
      data: data,
      skipDuplicates: true,
    });
  }

  async createSeason(data: Prisma.SeasonCreateInput) {
    return await prisma.season.create({ data, include: { title: true } });
  }

  async createVideo(data: Prisma.VideoCreateInput) {
    return await prisma.video.create({ data });
  }
}
