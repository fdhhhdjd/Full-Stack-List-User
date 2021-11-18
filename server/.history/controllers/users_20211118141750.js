import { v4 as uuid } from "uuid";
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};
export const createUser = (req, res) => {
  console.log(req);
};
