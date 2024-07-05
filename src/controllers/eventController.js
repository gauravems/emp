"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const eventService_1 = require("../services/eventService");
class EventController {
    static addEvent(req, res) {
        try {
            const event = eventService_1.EventService.addEvent(req.body);
            res.status(201).json(event);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to add event' });
        }
    }
    static updateEvent(req, res) {
        const { id } = req.params;
        const updatedEvent = eventService_1.EventService.updateEvent(id, req.body);
        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(updatedEvent);
    }
    static deleteEvent(req, res) {
        const { id } = req.params;
        const isDeleted = eventService_1.EventService.deleteEvent(id);
        if (!isDeleted) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(204).send();
    }
    static getEventById(req, res) {
        const { id } = req.params;
        const event = eventService_1.EventService.getEventById(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    }
    static listEvents(req, res) {
        const events = eventService_1.EventService.listEvents(req.query);
        res.json(events);
    }
}
exports.EventController = EventController;
