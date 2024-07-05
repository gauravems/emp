// src/services/eventService.ts
import { Event } from '../models/event';
import { v4 as uuidv4 } from 'uuid';

const events: Event[] = [];

export class EventService {
    static addEvent(eventData: Partial<Event>): Event {
        const event: Event = {
            ...eventData,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as Event;

        events.push(event);
        return event;
    }

    static updateEvent(id: string, eventData: Partial<Event>): Event | null {
        const index = events.findIndex(event => event.id === id);
        if (index === -1) {
            return null;
        }

        const updatedEvent: Event = {
            ...events[index],
            ...eventData,
            updatedAt: new Date(),
        };

        events[index] = updatedEvent;
        return updatedEvent;
    }

    static deleteEvent(id: string): boolean {
        const index = events.findIndex(event => event.id === id);
        if (index === -1) {
            return false;
        }

        events.splice(index, 1);
        return true;
    }

    static getEventById(id: string): Event | null {
        return events.find(event => event.id === id) || null;
    }

    static listEvents(filters?: Partial<Event>): Event[] {
        return filters 
            ? events.filter(event => 
                Object.entries(filters).every(([key, value]) => 
                    (event as any)[key] === value))
            : events;
    }
}
