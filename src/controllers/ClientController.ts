import { Request, Response, NextFunction } from "express";
import { Client } from "../models/Client";

const ClientController = {
  async createClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const client = await Client.create(req.body);

      res.json(client);
    } catch (error) {
      res
        .status(500)
        .json({ Error: "Não foi possível criar o registro na base de dados!" });
      next();
    }
  },

  async showAllClients(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { page = 1 }: any = req.query;
      const client = await Client.findAll({
        limit: 10,
      });

      res.json(client);
    } catch (error) {
      res
        .status(500)
        .json({ Error: "Não foi possível trazer os registros solicitados!" });
      next();
    }
  },

  async showClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const client = await Client.findOne({ where: { name: req.params.name } });

      res.json(client);
    } catch (error) {
      res.status(500).json({
        Error: "Não foi possível trazer o registro específico solicitado!",
      });
      next();
    }
  },

  async updateClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await Client.findByPk(req.params.id);
      if (result != null) {
        await Client.update(
          {
            cpf: req.body.cpf,
            name: req.body.name,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        const client = await Client.findByPk(req.params.id);

        res.json(client);
      } else {
        res.status(404).json({
          error: "Não foi possível encontrar o registro solicitado!",
        });
        next();
      }
    } catch (error) {
      res.status(500).json({
        Error: "Não foi possível atualizar o registro na base de dados!",
      });
      next();
    }
  },

  async deleteClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const client = await Client.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (client !== 0) {
        res.json({
          success: "Registro deletado com sucesso!",
        });
      } else {
        res.status(500).json({
          error: "Não foi possível deletar esse registro solicitado!",
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ Error: "Não foi possível deletar o registro solicitado!" });
      next();
    }
  },
};

export default ClientController;
