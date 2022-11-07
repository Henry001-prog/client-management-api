import Sequelize, { Model } from "sequelize";
import { db } from "../config/database";

interface IClient extends Model {
  id: number;
  cpf: string;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  state: string;
  city: string;
  createdAt: Date;
}

const ClientSchema = db.define<IClient>("clients", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// ClientSchema.belongsTo(Situation, { foreignKey: 'situationId', allowNull: false });

//Criar a tabela
ClientSchema.sync();
//Verificar se há alguma diferença na tabela e realiza a alteração
//User.sync({ alter: true });

export const Client = ClientSchema;
