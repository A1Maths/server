import express from 'express';
import loginControls from '../controllers/loginController.js';
const {loginUser, signupUser} = loginControls;

export const router = express.Router();

// login route
router.post('/login', loginUser)


//signup route
router.post('/signup', signupUser)
