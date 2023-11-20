import * as dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from "./config/config";
import router from './routes/index';
require('./models/index');

dotenv.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3333;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established with the database');
  })
  .catch((err: any) => {
    console.error('Failed to connect to database:', err);
  });

app.use('/api',router);

app.use((_req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;