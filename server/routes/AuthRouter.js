const express = require('express');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');
const {signup,login} = require('../controllers/AuthController');
const router=express.Router();

// Define routes
router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);

module.exports = router;