
import { Repository, EntityRepository } from "typeorm";
import { AppConfig } from "../entities/AppConfig";

@EntityRepository(AppConfig)
class AppConfigRepository extends Repository<AppConfig> {}

export { AppConfigRepository };