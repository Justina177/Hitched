import express from 'express';
import newPost from '../../controllers/post/newPost.js'


const router = express.Router();

router.post('/new', newPost)

export default router;