import { getCustomRepository } from "typeorm";
import { WebPushConfigRepository } from "../repositories/WebPushConfigRepository";
import { AppConfigRepository } from "../repositories/AppConfigRepository";

interface IWebPushConfigRequest {
  app_id: string,
  siteName: string,
  siteURL: string,
  siteIconURL: string,
  messageText: string,
  btnAllowTxt: string,
  btnDontAllowTxt: string,
  notifyTitle: string,
  notifyText: string,
  enableLinkDestiny: boolean,
  urlLinkDestiny: string,
}

class WebPushConfigService {
  async create({
    app_id,  siteName, siteURL, siteIconURL, messageText, 
    btnAllowTxt, btnDontAllowTxt, notifyTitle, 
    notifyText, enableLinkDestiny, urlLinkDestiny
  }: IWebPushConfigRequest) {
    const webPushConfigRepository = getCustomRepository(WebPushConfigRepository);
    const appConfigRepository = getCustomRepository(AppConfigRepository);


    const appConfigExists = await appConfigRepository.findOne(app_id);

    if (!appConfigExists) {
      throw new Error("App Config does not exists!");
    }

    const webPushConfig = webPushConfigRepository.create({
      app_id,  siteName, siteURL, siteIconURL, messageText, 
      btnAllowTxt, btnDontAllowTxt, notifyTitle, 
      notifyText, enableLinkDestiny, urlLinkDestiny
    });

    await webPushConfigRepository.save(webPushConfig);

    return webPushConfig;
  }
}

export { WebPushConfigService };