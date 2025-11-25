import { Router } from 'express';
import { VideoController } from '../controllers/videoController';

const videoController = new VideoController();
const VideoRouter = Router();

VideoRouter.get('/', (req, res) => videoController.getVideos(req, res));
VideoRouter.get('/:id', (req, res) => videoController.getVideoById(req, res));
VideoRouter.post('/', (req, res) => videoController.createVideo(req, res));
VideoRouter.put('/:id', (req, res) => videoController.updateVideo(req, res));
VideoRouter.delete('/:id', (req, res) => videoController.deleteVideo(req, res));

export default VideoRouter;
