// server.ts

import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Cargar variables de entorno desde un archivo .env
dotenv.config();

// Configurar la aplicación Express
const app: Application = express();
const port = process.env.PORT || 3000;

// Configurar Sequelize para conectarse a PostgreSQL
const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'tu_basede_datos',
  username: process.env.DB_USER || 'tu_usuario',
  password: process.env.DB_PASSWORD || 'tu_contraseña',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  dialect: 'postgres',
});

// Comprobar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch((err: any) => {
    console.error('Error al conectar con la base de datos:', err);
  });

// Definir modelos de Sequelize y realizar configuraciones adicionales según sea necesario

// Rutas de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
