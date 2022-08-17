import express from 'express';
import regUser from '../../controllers/auth/register.controller.js';
// import logUser from '../../controllers/auth/login.controller.js';

const router = express.Router();

router.post('/register', regUser)
// router.get('/login', logUser)

export default router;

