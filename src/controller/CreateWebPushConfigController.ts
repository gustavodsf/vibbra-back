import { Request, Response } from "express";
import { WebPushConfigService } from "../service/WebPushConfigService";

class CreateWebPushConfigController {
  async handle(request: Request, response: Response) {
    const { app_id,  siteName, siteURL, siteIconURL, messageText, 
      btnAllowTxt, btnDontAllowTxt, notifyTitle, 
      notifyText, enableLinkDestiny, urlLinkDestiny } = request.body;
    
    const webPushConfigService = new WebPushConfigService();

    const webPushConfig = await webPushConfigService.create({
      app_id,  siteName, siteURL, siteIconURL, messageText, 
      btnAllowTxt, btnDontAllowTxt, notifyTitle, 
      notifyText, enableLinkDestiny, urlLinkDestiny
    });

    return response.json(webPushConfig);
  }
}

export { CreateWebPushConfigController };