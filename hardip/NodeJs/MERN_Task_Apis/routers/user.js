const express = require('express');
const router = express.Router();
const { UserControllers } = require('../controllers');
const { isAdminVarify } = require('../middleware/VarifyTocken');

router.get('/',isAdminVarify, UserControllers.get_users)

module.exports=router;