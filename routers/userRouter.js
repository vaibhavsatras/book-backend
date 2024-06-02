const express = require('express');
const { userSignup, userSignIn } = require('../controlers/users');
const router = express.Router();

router.post('/signup',userSignup)
router.post('/signin',userSignIn)

module.exports = router