import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

export default new Sequelize(
  env.DB_USERNAME, 
  env.DB_USERNAME, 
  env.DB_PASSWORD, 
  {
    host: env.DB_HOST,
    dialect: 'postgres'
  }
);