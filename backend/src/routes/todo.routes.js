import express from 'express';
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router()

router.post('/:id', addTask);

export default router;