import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class EmailConfig1624302072284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "email_config",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "smtpServerName",
            type: "varchar",
          },
          {
            name: "smtpPort",
            type: "varchar",
          },
          {
            name: "smtpLogin",
            type: "varchar",
          },
          {
            name: "smtpPass",
            type: "varchar",
          },
          {
            name: "senderName",
            type: "varchar",
          },
          {
            name: "senderEmail",
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
            name: "FK_APP_TO_EMAIL",
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
    await queryRunner.dropTable("email_config");
  }
}