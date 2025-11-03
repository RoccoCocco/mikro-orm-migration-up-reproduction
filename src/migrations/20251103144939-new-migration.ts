import { Migration } from '@mikro-orm/migrations';

export class Migration20251103144939 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "being" ("id" uuid not null, "type" text check ("type" in ('AKUMA', 'ONI')) not null, "data" jsonb null, constraint "being_pkey" primary key ("id"));`);
    this.addSql(`create index "being_type_index" on "being" ("type");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "being" cascade;`);
  }

}
