const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers/');

router.get('/registration', AuthController.create_users)

module.exports=router;