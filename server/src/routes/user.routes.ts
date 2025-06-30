import { Router } from "express";
import {postUser, getUser, login, signUp} from "../controllers/user.controllers";
const router = Router();

router.post('/', postUser);
router.post('/login', login);
router.get('/', getUser)
router.post('/signup', signUp)

export default router;