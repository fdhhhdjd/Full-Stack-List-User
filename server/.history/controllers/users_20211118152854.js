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
};
