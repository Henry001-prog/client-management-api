"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesApi = void 0;
const express_1 = require("express");
const ClientController_1 = __importDefault(require("./controllers/ClientController"));
const routes = (0, express_1.Router)();
routes.post('/api/client', ClientController_1.default.createClient);
routes.get('/api/clients', ClientController_1.default.showAllClients);
routes.get('/api/client/:name', ClientController_1.default.showClient);
routes.put('/api/client/:id', ClientController_1.default.updateClient);
routes.delete('/api/client/:id', ClientController_1.default.deleteClient);
exports.routesApi = routes;
