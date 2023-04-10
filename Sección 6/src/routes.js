const express = require('express');

const routes = express.Router();

const {
  addUserController,
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
} = require('./controllers');

routes.post('/users', addUserController);

routes.get('/users', getUsersController);

routes.get('/users/:uid', getUserByIdController);

routes.put('/users/:uid', updateUserByIdController);

routes.delete('/users/:uid', deleteUserByIdController);

module.exports = routes;
