"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const require_dir_1 = __importDefault(require("require-dir"));
const cors_1 = __importDefault(require("./config/cors"));
const routes_1 = require("./routes");
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default);
(0, require_dir_1.default)("./models");
app.use(routes_1.routesApi);
const port = 3002;
app.listen(port, () => {
    console.log("Server is running on PORT 3002");
});
