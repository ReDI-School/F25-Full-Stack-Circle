import { Request, Response } from 'express';
import { VideoService } from '../services/videoService';

const videoService = new VideoService();

export class VideoController {
  async getVideos(req: Request, res: Response) {
    try {
      const videos = await videoService.getAllVideos();

      res.json({ videos });
    } catch (error) {
      console.error('Error fetching videos:', error);

      res.status(500).json({ error: 'Failed to fetch videos' });
    }
  }

  async getVideoById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const video = await videoService.getVideoById(id);

      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }

      res.json({ video });
    } catch (error) {
      console.error('Error fetching video:', error);
      res.status(500).json({ error: 'Failed to fetch video' });
    }
  }

  async createVideo(req: Request, res: Response) {
    try {
      const body = req.body;
      const video = await videoService.createVideo(body);

      res.status(201).json({ video });
    } catch (error) {
      console.error('Error creating video:', error);

      res.status(500).json({ error: 'Failed to create video' });
    }
  }

  async updateVideo(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const video = await videoService.updateVideo(id, body);

      res.json({ video });
    } catch (error) {
      console.error('Error updating video:', error);

      res.status(500).json({ error: 'Failed to update video' });
    }
  }

  async deleteVideo(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await videoService.deleteVideo(id);

      res.json({ message: 'Video deleted successfully' });
    } catch (error) {
      console.error('Error deleting video:', error);

      res.status(500).json({ error: 'Failed to delete video' });
    }
  }
}
