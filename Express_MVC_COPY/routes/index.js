const express = require('express')
const router = express.Router()
const {createUser, listUsers, updateUser, deleteUser} = require("../controllers/UserController.js")

router.get('/', (req, res) => {
  res.send('Hello router')
});

router.post("/add-user" , createUser);

router.get("/list-users", listUsers);

router.put("/update-user/:id", updateUser);

router.delete("/delete-user/:id", deleteUser);


module.exports = router;