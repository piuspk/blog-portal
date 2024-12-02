import express from 'express';
import { signin, signup,googleOauth } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleOauth);
// router.post('/google', google);

export default router;
