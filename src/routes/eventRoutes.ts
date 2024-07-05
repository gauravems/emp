// src/routes/eventRoutes.ts
import { Router } from 'express';
import { EventController } from '../controllers/eventController';

const router = Router();

router.post('/events', EventController.addEvent);
router.put('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);
router.get('/events/:id', EventController.getEventById);
router.get('/events', EventController.listEvents);

export default router;
