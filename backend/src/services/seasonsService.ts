import prisma from '../libs/prisma';

export class seasonsService {
  // Alle Seasons abrufen
  async getAllSeasons() {
    return await prisma.season.findMany({
      include: {
        title: true,
        video: true,
      },
    });
  } //// Titel und Episoden (Videos) mit einbeziehen

  async getSeasonById(id: number) {
    return await prisma.season.findUnique({
      where: { id },
      include: { title: true, video: true },
    });
  }

  // Neue Season anlegen
  async createSeason(data: { number: number; thumbnail: string; title_id: number }) {
    return await prisma.season.create({
      data,
      include: {
        title: true,
      },
    });
  }
  // Season aktualisieren
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
