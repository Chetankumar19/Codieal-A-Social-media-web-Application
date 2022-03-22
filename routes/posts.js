const passport = require('passport');
const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts-controller');

router.post('/create',passport.checkAuthentication,postController.create);

module.exports = router;