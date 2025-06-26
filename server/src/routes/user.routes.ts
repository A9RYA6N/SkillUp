import { Router } from "express";
import {postUser, getUser, login} from "../controllers/user.controllers";
const router = Router();

router.post('/', postUser);
router.post('/login', login);
router.get('/', getUser)

export default router;