import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();
router.post("/register", upload.single("avatar"), register);
router.post("/login", upload.none(), login);
router.get("/logout", logout);
router.get("/user-profile", isLoggedIn, getProfile);

export default router;
