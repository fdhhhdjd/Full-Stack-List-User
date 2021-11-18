import { v4 as uuid } from "uuid";
let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User Add Success");
};
export const getUser = (req, res) => {
  const signedUser = users.filter((item) => item.id === req.params.id);
  res.send(signedUser);
};
export const deleteUser = (req, res) => {
  users = users.filter((item) => item.id !== req.params.id);
  res.send("user Delete Success");
};
export const updateUser = (req, res) => {
  const user = users.find((item) => item.id === req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;
  res.send("User Edit Success");
};
