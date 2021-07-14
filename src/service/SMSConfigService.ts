import { getCustomRepository } from "typeorm";
import { SMSConfigRepository } from "../repositories/SMSConfigRepository";
import { AppConfigRepository } from "../repositories/AppConfigRepository";

interface ISMSConfigRequest {
  app_id: string,
  provedorSMS: string,
  login: string,
  senha: string,
}

class SMSConfigService {
  async create({
    app_id, provedorSMS, login, senha
  }: ISMSConfigRequest) {
    const smsConfigRepository = getCustomRepository(SMSConfigRepository);
    const appConfigRepository = getCustomRepository(AppConfigRepository);


    const appConfigExists = await appConfigRepository.findOne(app_id);

    if (!appConfigExists) {
      throw new Error("App Config does not exists!");
    }

    const smsConfig = smsConfigRepository.create({
      app_id, provedorSMS, login, senha
    });

    await smsConfigRepository.save(smsConfig);

    return smsConfig;
  }
}

export { SMSConfigService };