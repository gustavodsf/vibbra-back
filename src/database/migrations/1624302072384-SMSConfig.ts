import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SMSConfig1624302072284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sms_config",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "provedorSMS",
            type: "varchar",
          },
          {
            name: "login",
            type: "varchar",
          },
          {
            name: "senha",
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
            name: "FK_APP_TO_SMS",
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
    await queryRunner.dropTable("sms_config");
  }
}