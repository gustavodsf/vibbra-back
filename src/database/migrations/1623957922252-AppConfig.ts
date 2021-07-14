import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AppConfig1623957922252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "app_config",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "appName",
            type: "varchar",
          },
          {
            name: "isWebPush",
            type: "boolean",
            default: false,
          },
          {
            name: "isEmail",
            type: "boolean",
            default: false,
          },
          {
            name: "isSMS",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("app_config");
  }
}