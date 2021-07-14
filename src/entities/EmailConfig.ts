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

@Entity("email_config")
class EmailConfig {
  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "app_id" })
  @ManyToOne(() => AppConfig)
  appConfig: AppConfig;

  @Column()
  smtpServerName: string;

  @Column()
  smtpPort: string;

  @Column()
  smtpLogin: string;

  @Column()
  smtpPass: string;

  @Column()
  senderName: string;

  @Column()
  senderEmail: string;

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

export { EmailConfig };