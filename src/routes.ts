import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

export { router };
