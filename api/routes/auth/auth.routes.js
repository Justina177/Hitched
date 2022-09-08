import express from 'express';
import regUser from '../../controllers/auth/register.controller.js';
import loginUser from '../../controllers/auth/login.controller.js';

const router = express.Router();

router.post('/register', regUser)
router.get('/login', loginUser)

export default router;

