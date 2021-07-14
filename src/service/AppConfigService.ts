
import { getCustomRepository } from "typeorm";
import { AppConfigRepository } from "../repositories/AppConfigRepository";

interface IAppConfigRequest {
  appName: string,
  isWebPush: boolean,
  isEmail: boolean,
  isSMS: boolean
}

class AppConfigService {
  async create({appName, isWebPush, isEmail, isSMS}: IAppConfigRequest) {
    const appConfigRepository = getCustomRepository(AppConfigRepository);

    if (!appName) {
      throw new Error("Incorrect name!");
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const appAlreadyExists = await appConfigRepository.findOne({
      appName,
    });

    if (appAlreadyExists) {
      throw new Error("App Name already exists!");
    }

    const app = appConfigRepository.create({
      appName, isWebPush, isEmail, isSMS
    });

    await appConfigRepository.save(app);

    return app;
  }
}

export { AppConfigService };