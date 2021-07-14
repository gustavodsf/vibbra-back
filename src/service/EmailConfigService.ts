import { getCustomRepository } from "typeorm";
import { EmailConfigRepository } from "../repositories/EmailConfigRepository";
import { AppConfigRepository } from "../repositories/AppConfigRepository";

interface IEmailConfigRequest {
  app_id: string,
  smtpServerName: string,
  smtpPort: string,
  smtpLogin: string, 
  smtpPass: string,
  senderName: string,
  senderEmail: string
}

class EmailConfigService {
  async create({
    app_id, smtpServerName, smtpPort, smtpLogin, smtpPass, senderName, senderEmail
  }: IEmailConfigRequest) {
    const emailConfigRepository = getCustomRepository(EmailConfigRepository);
    const appConfigRepository = getCustomRepository(AppConfigRepository);


    const appConfigExists = await appConfigRepository.findOne(app_id);

    if (!appConfigExists) {
      throw new Error("App Config does not exists!");
    }

    const emailConfig = emailConfigRepository.create({
      app_id, smtpServerName, smtpPort, smtpLogin, smtpPass, senderName, senderEmail, 
    });

    await emailConfigRepository.save(emailConfig);

    return emailConfig;
  }
}

export { EmailConfigService };