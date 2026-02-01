import express from 'express';
import { getNearProject } from '../controller/nearObject.js';

const router=express.Router();
router.get('/getnearobject',getNearProject);

export default router;