import prisma from '../libs/prisma';

export class SeasonService {
  async getAllSeasons() {
    return await prisma.season.findMany({
      include: {
        title: true,
        video: true,
      },
    });
  }

  async getSeasonById(id: number) {
    return await prisma.season.findUnique({
      where: { id },
      include: { title: true, video: true },
    });
  }

  async createSeason(data: { number: number; thumbnail: string; title_id: number }) {
    return await prisma.season.create({
      data,
      include: {
        title: true,
      },
    });
  }

  async updateSeason(id: number, data: { number?: number; thumbnail?: string; title_id?: number }) {
    return await prisma.season.update({
      where: { id },
      data,
      include: {
        title: true,
      },
    });
  }
  async deleteSeason(id: number) {
    return await prisma.season.delete({
      where: { id },
    });
  }
}
