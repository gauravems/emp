"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const uuid_1 = require("uuid");
const events = [];
class EventService {
    static addEvent(eventData) {
        const event = Object.assign(Object.assign({}, eventData), { id: (0, uuid_1.v4)(), createdAt: new Date(), updatedAt: new Date() });
        events.push(event);
        return event;
    }
    static updateEvent(id, eventData) {
        const index = events.findIndex(event => event.id === id);
        if (index === -1) {
            return null;
        }
        const updatedEvent = Object.assign(Object.assign(Object.assign({}, events[index]), eventData), { updatedAt: new Date() });
        events[index] = updatedEvent;
        return updatedEvent;
    }
    static deleteEvent(id) {
        const index = events.findIndex(event => event.id === id);
        if (index === -1) {
            return false;
        }
        events.splice(index, 1);
        return true;
    }
    static getEventById(id) {
        return events.find(event => event.id === id) || null;
    }
    static listEvents(filters) {
        return filters
            ? events.filter(event => Object.entries(filters).every(([key, value]) => event[key] === value))
            : events;
    }
}
exports.EventService = EventService;
