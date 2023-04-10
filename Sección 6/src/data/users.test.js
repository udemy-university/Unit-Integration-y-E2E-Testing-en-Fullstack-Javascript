const {
  addUser,
  getUsers,
  findUserByUid,
  updateUserByUid,
  removeUserByUid,
} = require('./users');

const { buildUser } = require('../__fixtures__/users');

test('addUser - shoud add new user', () => {
  const user = buildUser();
  addUser(user);
  expect(getUsers()).toEqual([user]);
});

test('findUserByUid - shoud return undefined when there are no users', () => {
  const user = findUserByUid({ uid: '' });

  expect(user).toEqual(undefined);
});

test('findUserByUid - shoud return a valid user', () => {
  const user = buildUser();
  const userFound = findUserByUid({ uid: user.uid });

  expect(userFound).toEqual(user);
});

test('updateUserByUid - shoud update a valid user', () => {
  const user = buildUser();
  const userUpdated = { ...user, name: 'updated' };
  const usersUpdated = updateUserByUid(userUpdated);

  expect(usersUpdated).toEqual([userUpdated]);
});

test('removeUserByUid - should remove a valid user', () => {
  const user = buildUser();
  addUser(user);

  const users = removeUserByUid({ uid: user.uid });
  expect(users).toEqual([]);
});
