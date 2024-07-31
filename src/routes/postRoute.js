import express from 'express';
import {createPost,getPosts, getSinglePost, updatePost, deletePost} from '../controllers/postController.js'
const router = express.Router();

router.get('/posts',getPosts)
router.post('/createpost', createPost)
router.get('/posts/:id', getSinglePost)
router.put('/updatepost/:id', updatePost)
router.delete('/deletepost/:id', deletePost)

export default router;
