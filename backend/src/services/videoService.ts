import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class VideoService {
  async getAllVideos() {
    return await prisma.video.findMany();
  }

  async getVideoById(id: number) {
    return await prisma.video.findUnique({
      where: { id },
      include: { title: true, UserReaction: true },
    });
  }

  async createVideo(data: {
    name?: string;
    duration: number;
    url: string;
    movie_title_id?: number;
    season_id?: number;
    episode_number?: number;
  }) {
    return await prisma.video.create({ data });
  }

  async updateVideo(
    id: number,
    data: {
      name?: string;
      duration?: number;
      url?: string;
      movie_title_id?: number;
      season_id?: number;
      episode_number?: number;
    }
  ) {
    return await prisma.video.update({
      where: { id },
      data,
    });
  }

  async deleteVideo(id: number) {
    return await prisma.video.delete({
      where: { id },
    });
  }
}
