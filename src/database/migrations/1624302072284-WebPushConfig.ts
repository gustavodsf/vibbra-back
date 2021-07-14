import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class WebPushConfig1624302072284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "web_push_config",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "siteName",
            type: "varchar",
          },
          {
            name: "siteURL",
            type: "varchar",
          },
          {
            name: "siteIconURL",
            type: "varchar",
          },
          {
            name: "messageText",
            type: "varchar",
          },
          {
            name: "btnAllowTxt",
            type: "varchar",
          },
          {
            name: "btnDontAllowTxt",
            type: "varchar",
          },
          {
            name: "notifyTitle",
            type: "varchar",
          },
          {
            name: "notifyText",
            type: "varchar",
          },
          {
            name: "enableLinkDestiny",
            type: "boolean",
            default: false,
          },
          {
            name: "urlLinkDestiny",
            type: "varchar",
          },
          {
            name: "app_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FK_APP_TO_WEB_PUSH",
            referencedTableName: "app_config",
            referencedColumnNames: ["id"],
            columnNames: ["app_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("web_push_config");
  }
}