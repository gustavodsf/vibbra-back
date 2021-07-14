import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { AppConfig } from "./AppConfig";

@Entity("sms_config")
class SMSConfig {

  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "app_id" })
  @ManyToOne(() => AppConfig)
  appConfig: AppConfig;

  @Column()
  provedorSMS: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  app_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SMSConfig };