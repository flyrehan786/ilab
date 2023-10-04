// const auth = require("../middleware/auth");
// const _ = require("lodash");
const { validate, findUser, encryptedPassword, saveUser, findAll, deActivateUser, activateUser, deleteUser } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  const users = await findAll();
  const filteredList = users.map(obj => {
    const { password, created_by, updated_by, ...rest } = obj;
    return rest;
  });
  const keys = Object.keys(filteredList[0]);
  filteredList.filter(x => {
    x.created_at = new Date(x.created_at).toLocaleString();
    x.updated_at = new Date(x.updated_at).toLocaleString();
    if (+x.is_admin === 1) x.is_admin = 'Yes';
    else x.is_admin = 'No';
  })
  res.send({
    rows: filteredList,
    headers: keys,
    filters: [keys[1], keys[2]]
  });
});

router.get("/:id", async (req, res) => {
  const user = await findUser(req.params.id);
  if (!user)
    return res
      .status(404)
      .send("The user with the given ID was not found.");

  delete user.password;
  user.created_at = new Date(user.created_at).toLocaleString();
  user.updated_at = new Date(user.updated_at).toLocaleString();
  res.send(user);
});

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const queryResult = await findUser(req.body.username);
  if (queryResult) return res.status(400).send("User already registered.");
  const encryptPassword = await encryptedPassword(req.body.username);

  const newUser = {
    id: null,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: encryptPassword,
    is_admin: req.body.is_admin,
    status: 1
  };

  const insertedId = await saveUser(newUser);
  newUser.id = insertedId;
  res
    .send({
      id: newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      username: newUser.username,
      is_admin: newUser.is_admin,
      status: newUser.status
    });
});

router.put("/disable/:id", async (req, res) => {
  const rowsAffected = await deActivateUser(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The user with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.put("/activate/:id", async (req, res) => {
  const rowsAffected = await activateUser(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The user with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteUser(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The user with the given ID cannot be deleted.");
  }
  
  res.send({ deleted: true });
});


module.exports = router;
