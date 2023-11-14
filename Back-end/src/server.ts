import * as dotenv from 'dotenv';
import sequelize from "../src/config/config";
import express, { Application, Request, Response } from 'express';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3333;

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch((err: any) => {
    console.error('Error al conectar con la base de datos:', err);
  });

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando en el puerto ${port}`);
});
