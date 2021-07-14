import { Request, Response } from "express";
import { SMSConfigService } from "../service/SMSConfigService";

class CreateSMSConfigController {
  async handle(request: Request, response: Response) {
    const { app_id, provedorSMS, login, senha } = request.body;
    
    const smsConfigService = new SMSConfigService();

    const smsConfig = await smsConfigService.create({
      app_id, provedorSMS, login, senha
    });

    return response.json(smsConfig);
  }
}

export { CreateSMSConfigController };