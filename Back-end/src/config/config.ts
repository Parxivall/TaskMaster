import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'TaskMaster',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '1172',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
    logging: console.log,
    dialectOptions: {
      debug: true,
      },
  });

export default sequelize;