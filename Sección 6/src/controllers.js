const {
  addUser,
  getUsers,
  findUserByUid,
  updateUserByUid,
  removeUserByUid,
} = require('./data/users');

module.exports.addUserController = (req, res) => {
  const { name, address, age, uid } = req.body;

  addUser({ name, address, age, uid });
  return res.status(201).send({ message: 'success' });
};

module.exports.getUsersController = (req, res) => {
  return res.status(200).send(getUsers());
};

module.exports.getUserByIdController = (req, res) => {
  const { uid } = req.params;

  const user = findUserByUid(uid);
  return res.status(200).send(user);
};

module.exports.updateUserByIdController = (req, res) => {
  const { name, address, age } = req.body;
  const { uid } = req.params;

  const usersUpdated = updateUserByUid({ uid, name, address, age });

  return res.status(200).send(usersUpdated);
};

module.exports.deleteUserByIdController = (req, res) => {
  const { uid } = req.params;

  const users = removeUserByUid({ uid });
  return res.status(200).send(users);
};
