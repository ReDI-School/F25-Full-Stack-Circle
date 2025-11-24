import { VideoType, Prisma } from '@prisma/client';
import prisma from 'src/libs/prisma';

export class TitleService {
  async getAllTitles() {
    return await prisma.title.findMany({ include: { category: true, season: true, video: true } });
  }

  async getTitleByIdIncludeAll(id: number) {
    const title = await prisma.title.findUnique({
      where: { id },
      include: { category: true, season: true, video: true },
    });

    return title;
  }

  async getTitleById(id: number) {
    const title = await this.getTitleByIdIncludeAll(id);
    if (!title) return;

    const { name, type, category, season, video, createdAt, updatedAt } = title;

    const titleTypeMovie = { id, name, type, category, video, createdAt, updatedAt };
    const titleTypeSeries = { id, name, type, category, season, createdAt, updatedAt };

    switch (title.type) {
      case VideoType.MOVIE:
        return titleTypeMovie;
      case VideoType.SERIES:
        return titleTypeSeries;
      default:
        return title;
    }
  }

  async createTitle(title: Prisma.TitleCreateInput) {
    return await prisma.title.create({
      data: title,
      include: { category: true, season: true, video: true },
    });
  }

  async updateTitle(id: number, title: Prisma.TitleUpdateInput) {
    return await prisma.title.update({
      where: { id },
      data: title,
      include: { category: true, season: true, video: true },
    });
  }

  async deleteTitle(id: number) {
    return await prisma.title.delete({ where: { id } });
  }
}

//
