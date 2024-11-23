import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = Router();
const upload = multer(); // Use multer for parsing FormData                 
router.post("/register", upload.none(),register);
router.post("/login",upload.none(), login);
router.get("/logout", logout);
router.get("/user-profile", isLoggedIn, getProfile);

export default router;
