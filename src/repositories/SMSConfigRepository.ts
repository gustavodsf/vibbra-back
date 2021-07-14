import { Repository, EntityRepository } from "typeorm";
import { SMSConfig } from "../entities/SMSConfig";

@EntityRepository(SMSConfig)
class SMSConfigRepository extends Repository<SMSConfig> {}

export { SMSConfigRepository };