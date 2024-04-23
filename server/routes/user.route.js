import express from 'express';
import { getDetails, store } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/store', store)
router.post('/getDetails', getDetails)
export default router