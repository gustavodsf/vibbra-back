import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("app_config")
class AppConfig {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  appName: string;

  @Column()
  isWebPush: boolean;

  @Column()
  isEmail: boolean;

  @Column()
  isSMS: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { AppConfig };