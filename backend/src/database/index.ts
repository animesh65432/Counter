import config from "../config";
import { Sequelize } from "sequelize";

const DataBase = new Sequelize({
  database: config.DATABASENAME,
  password: config.DATABASEPASSWORD,
  username: config.DATABASEUSERNAME,
  dialect: "mysql",
});

export default DataBase;
