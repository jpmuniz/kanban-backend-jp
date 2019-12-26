import Sequelize from "sequelize";

import Taks from "../app/models/Task";

import databaseConfig from "../config/Database";

const models = [Taks];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
