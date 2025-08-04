const express = require('express')
const router = express.Router()
const {createUser, listUsers, updateUser, deleteUser, login} = require("../controllers/UserController.js");
const { adminMiddleware } = require('../controllers/middleware.js');

router.get('/', (req, res) => {
  res.send('Hello router')
});

router.post("/add-user" ,adminMiddleware, createUser);
router.post("/login" , login);

router.get("/list-users",adminMiddleware, listUsers);

router.put("/update-user/:id",adminMiddleware, updateUser);

router.delete("/delete-user/:id",adminMiddleware, deleteUser);


module.exports = router;