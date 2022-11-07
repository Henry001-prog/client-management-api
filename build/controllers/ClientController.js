"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../models/Client");
const ClientController = {
    createClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield Client_1.Client.create(req.body);
                res.json(client);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ Error: "Não foi possível criar o registro na base de dados!" });
                next();
            }
        });
    },
    showAllClients(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page = 1 } = req.query;
                const client = yield Client_1.Client.findAll({
                    limit: 10,
                });
                res.json(client);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ Error: "Não foi possível trazer os registros solicitados!" });
                next();
            }
        });
    },
    showClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield Client_1.Client.findOne({ where: { name: req.params.name } });
                res.json(client);
            }
            catch (error) {
                res.status(500).json({
                    Error: "Não foi possível trazer o registro específico solicitado!",
                });
                next();
            }
        });
    },
    updateClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Client_1.Client.findByPk(req.params.id);
                if (result != null) {
                    yield Client_1.Client.update({
                        cpf: req.body.cpf,
                        name: req.body.name,
                        birthDate: req.body.birthDate,
                        gender: req.body.gender,
                        address: req.body.address,
                        state: req.body.state,
                        city: req.body.city,
                    }, {
                        where: {
                            id: req.params.id,
                        },
                    });
                    const client = yield Client_1.Client.findByPk(req.params.id);
                    res.json(client);
                }
                else {
                    res.status(404).json({
                        error: "Não foi possível encontrar o registro solicitado!",
                    });
                    next();
                }
            }
            catch (error) {
                res.status(500).json({
                    Error: "Não foi possível atualizar o registro na base de dados!",
                });
                next();
            }
        });
    },
    deleteClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield Client_1.Client.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (client !== 0) {
                    res.json({
                        success: "Registro deletado com sucesso!",
                    });
                }
                else {
                    res.status(500).json({
                        error: "Não foi possível deletar esse registro solicitado!",
                    });
                }
            }
            catch (error) {
                res
                    .status(500)
                    .json({ Error: "Não foi possível deletar o registro solicitado!" });
                next();
            }
        });
    },
};
exports.default = ClientController;
