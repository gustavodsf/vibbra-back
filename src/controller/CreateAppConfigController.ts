import { Request, Response } from "express";
import { AppConfigService } from "../service/AppConfigService";

class CreateAppConfigController {
  async handle(request: Request, response: Response) {
    const {  appName, isWebPush, isEmail, isSMS } = request.body;

    const appConfigService = new AppConfigService();

    const appConfig = await appConfigService.create({appName, isWebPush, isEmail, isSMS});

    return response.json(appConfig);
  }
}

export { CreateAppConfigController };
