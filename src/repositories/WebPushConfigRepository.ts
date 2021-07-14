import { Repository, EntityRepository } from "typeorm";
import { WebPushConfig } from "../entities/WebPushConfig";

@EntityRepository(WebPushConfig)
class WebPushConfigRepository extends Repository<WebPushConfig> {}

export { WebPushConfigRepository };