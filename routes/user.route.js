const router = require('express').Router()
const mongoose = require('mongoose')

const {createUser,fetchUsers} = require('../controllers/UserController')

router.post("/",createUser);
router.get("/",fetchUsers);

module.exports = router