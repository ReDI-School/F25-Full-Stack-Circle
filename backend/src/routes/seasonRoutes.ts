import { Router } from 'express';
import { SeasonController } from '../controllers/seasonController';

const router = Router();
const seasonController = new SeasonController();

router.get('/', (req, res) => seasonController.getAllSeasons(req, res));
router.get('/:id', (req, res) => seasonController.getSeasonById(req, res));
router.post('/', (req, res) => seasonController.createSeason(req, res));
router.put('/:id', (req, res) => seasonController.updateSeason(req, res));
router.delete('/:id', (req, res) => seasonController.deleteSeason(req, res));

export default router;
