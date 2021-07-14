import { Repository, EntityRepository } from "typeorm";
import { EmailConfig } from "../entities/EmailConfig";

@EntityRepository(EmailConfig)
class EmailConfigRepository extends Repository<EmailConfig> {}

export { EmailConfigRepository };