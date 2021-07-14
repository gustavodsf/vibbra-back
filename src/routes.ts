import { Router } from "express";

import { CreateAppConfigController } from "./controller/CreateAppConfigController";
import { CreateEmailConfigController } from "./controller/CreateEmailConfigController";
import { CreateSMSConfigController } from "./controller/CreateSMSConfigController";
import { CreateWebPushConfigController } from "./controller/CreateWebPushConfigController";

const router = Router();

const createAppConfigController = new CreateAppConfigController();
const createEmailConfigController = new CreateEmailConfigController();
const createSMSConfigController = new CreateSMSConfigController();
const createWebPushConfigController = new CreateWebPushConfigController();

router.post("/config/app", createAppConfigController.handle);
router.post("/config/email", createEmailConfigController.handle);
router.post("/config/sms",createSMSConfigController.handle);
router.post("/config/webpush",createWebPushConfigController.handle);

export { router };