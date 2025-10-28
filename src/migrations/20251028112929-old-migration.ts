import { Migration } from "@mikro-orm/migrations";

const TABLE_NAME = "my-table";

export class CreateMyTable extends Migration {
  async up(): Promise<void> {
    await this.ctx?.schema.createTable(TABLE_NAME, function (table) {
      table.string("id", 100).primary();
    });
  }

  async down(): Promise<void> {
    return this.ctx?.schema.dropTableIfExists(TABLE_NAME);
  }
}
