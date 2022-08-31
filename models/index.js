import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();
const env = process.env;

// import models


const sequelize = new Sequelize(env.DB_USERNAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'postgres'
});

export default async function testConnectionDB () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}