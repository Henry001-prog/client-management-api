"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = require("../config/database");
const ClientSchema = database_1.db.define("clients", {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cpf: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    birthDate: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
});
// ClientSchema.belongsTo(Situation, { foreignKey: 'situationId', allowNull: false });
//Criar a tabela
ClientSchema.sync();
//Verificar se há alguma diferença na tabela e realiza a alteração
//User.sync({ alter: true });
exports.Client = ClientSchema;
