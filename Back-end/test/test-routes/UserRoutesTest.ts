import { expect } from 'chai';
import supertest from 'supertest';
import app from "../../src/server";
import User from '../../src/models/Users';
import { beforeEach, describe, it } from 'node:test';

const request = supertest(app);

describe('User Routes', () => {
  // Puedes utilizar hooks de Mocha, como before() o beforeEach(),
  // para preparar el estado necesario antes de las pruebas

  beforeEach(async () => {
    // Eliminar todos los usuarios antes de cada prueba
    await User.destroy({ where: {} });
  });

  it('should get all users', async () => {
    const response = await request.get('/api/users');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should get a user by ID', async () => {
    // Crear un usuario de prueba
    const newUser = await User.create({
      phone: '123456789',
      nombre: 'Test User',
      email: 'test@example.com',
      roles: ['user'],
    });

    const response = await request.get(`/api/users/${newUser.id}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id', newUser.id);
  });

  it('should create a new user', async () => {
    const newUser = {
      phone: '987654321',
      nombre: 'New User',
      email: 'newuser@example.com',
      roles: ['user'],
    };

    const response = await request.post('/api/users').send(newUser);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
  });

  it('should update a user by ID', async () => {
    // Crear un usuario de prueba
    const newUser = await User.create({
      phone: '111111111',
      nombre: 'UserToUpdate',
      email: 'update@example.com',
      roles: ['user'],
    });

    const updatedUserData = {
      nombre: 'UpdatedUser',
    };

    const response = await request.patch(`/api/users/${newUser.id}`).send(updatedUserData);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('nombre', 'UpdatedUser');
  });

  it('should delete a user by ID', async () => {
    // Crear un usuario de prueba
    const newUser = await User.create({
      phone: '222222222',
      nombre: 'UserToDelete',
      email: 'delete@example.com',
      roles: ['user'],
    });

    const response = await request.delete(`/api/users/${newUser.id}`);
    expect(response.status).to.equal(204);

    // Verificar que el usuario se haya eliminado
    const deletedUser = await User.findByPk(newUser.id);
    expect(deletedUser).to.be.null;
  });
});
