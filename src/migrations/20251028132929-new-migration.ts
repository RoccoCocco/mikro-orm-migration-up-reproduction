import { Migration } from "@mikro-orm/migrations";

const TABLE_NAME = "my-table";

export class MyMigration extends Migration {
  async up(): Promise<void> {
    await this.ctx?.schema.alterTable(TABLE_NAME, function (table) {
      table.string("id", 50).alter();
    });
  }

  async down(): Promise<void> {
    await this.ctx?.schema.alterTable(TABLE_NAME, function (table) {
      table.string("id", 100).alter();
    });
  }
}
