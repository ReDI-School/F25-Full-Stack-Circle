import { VideoType, Prisma } from 'generated/prisma';
import prisma from 'src/libs/prisma';

export class TitleService {
  async getAllTitles() {
    return await prisma.title.findMany({ include: { category: true, season: true, video: true } });
  }

  async getTitleById(id: number) {
    const title = await prisma.title.findUnique({
      where: { id },
    });

    // include all relationship and remove if not needed
    if (title?.type === VideoType.MOVIE)
      return await prisma.title.findUnique({
        where: { id },
        include: { category: true, video: true },
      });
    else if (title?.type === VideoType.SERIES)
      return await prisma.title.findUnique({
        where: { id },
        include: { category: true, season: true },
      });
    else
      return await prisma.title.findUnique({
        where: { id },
        include: { category: true, season: true, video: true },
      });
  }

  // async createTitle(title: Prisma.TitleCreateInput) {
  async createTitle(title: Prisma.TitleCreateInput) {
    return await prisma.title.create({ data: title });
  }

  async updateTitle(id: number, title: Prisma.TitleUpdateInput) {
    return await prisma.title.update({ where: { id }, data: title });
  }

  async deleteTitle(id: number) {
    return await prisma.title.delete({ where: { id } });
  }
}
