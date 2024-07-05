"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/eventRoutes.ts
const express_1 = require("express");
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.post('/events', eventController_1.EventController.addEvent);
router.put('/events/:id', eventController_1.EventController.updateEvent);
router.delete('/events/:id', eventController_1.EventController.deleteEvent);
router.get('/events/:id', eventController_1.EventController.getEventById);
router.get('/events', eventController_1.EventController.listEvents);
exports.default = router;
