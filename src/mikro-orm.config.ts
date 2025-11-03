import { Migrator } from "@mikro-orm/migrations";
import { MikroOrmModuleSyncOptions } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const mikroOrmConfig: MikroOrmModuleSyncOptions = {
  driver: PostgreSqlDriver,
  dbName: "my-db",
  // debug: true,
  discovery: {
    checkDuplicateTableNames: false,
    checkDuplicateFieldNames: false,
  },
  entities: ["dist/**/*.entity.{ts,js}"],
  extensions: [Migrator],
  migrations: {
    path: "dist/migrations",
    snapshot: false,
    fileName: (timestamp) => `${timestamp}-new-migration`,
  },
};

export default mikroOrmConfig;
