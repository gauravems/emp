// src/controllers/eventController.ts
import { Request, Response } from 'express';
import { EventService } from '../services/eventService';

export class EventController {

    static addEvent(req: Request, res: Response) {
        try {
            const event = EventService.addEvent(req.body);
            res.status(201).json(event);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add event' });
        }
    }

    static updateEvent(req: Request, res: Response) {
        const { id } = req.params;
        const updatedEvent = EventService.updateEvent(id, req.body);

        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.json(updatedEvent);
    }

    static deleteEvent(req: Request, res: Response) {
        const { id } = req.params;
        const isDeleted = EventService.deleteEvent(id);

        if (!isDeleted) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(204).send();
    }

    static getEventById(req: Request, res: Response) {
        const { id } = req.params;
        const event = EventService.getEventById(id);

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.json(event);
    }

    static listEvents(req: Request, res: Response) {
        const events = EventService.listEvents(req.query);
        res.json(events);
    }
}
