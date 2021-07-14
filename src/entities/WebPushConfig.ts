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

@Entity("web_push_config")
class WebPushConfig {

  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "app_id" })
  @ManyToOne(() => AppConfig)
  appConfig: AppConfig;

  @Column()
  siteName: string;

  @Column()
  siteURL: string;

  @Column()
  siteIconURL: string;

  @Column()
  messageText: string;

  @Column()
  btnAllowTxt: string;

  @Column()
  btnDontAllowTxt: string;

  @Column()
  notifyTitle: string;

  @Column()
  notifyText: string;

  @Column()
  enableLinkDestiny: boolean;

  @Column()
  urlLinkDestiny: string;

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

export { WebPushConfig };