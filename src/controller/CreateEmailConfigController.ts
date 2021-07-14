import { Request, Response } from "express";
import { EmailConfigService } from "../service/EmailConfigService";

class CreateEmailConfigController {
  async handle(request: Request, response: Response) {
    const { app_id, smtpServerName, smtpPort, smtpLogin, smtpPass, senderName, senderEmail } = request.body;
    
    const emailConfigService = new EmailConfigService();

    const emailConfig = await emailConfigService.create({
      app_id, smtpServerName, smtpPort, smtpLogin, smtpPass, senderName, senderEmail
    });

    return response.json(emailConfig);
  }
}

export { CreateEmailConfigController };