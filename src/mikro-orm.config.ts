import { Migrator } from "@mikro-orm/migrations";
import { MikroOrmModuleSyncOptions } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const mikroOrmConfig: MikroOrmModuleSyncOptions = {
  driver: PostgreSqlDriver,
  dbName: "my-db",
  discovery: {
    checkDuplicateTableNames: false,
    checkDuplicateFieldNames: false,
  },
  entities: ["src/**/*.entity.{ts,js}"],
  extensions: [Migrator],
  migrations: {
    path: "src/migrations",
    snapshot: false,
    fileName: (timestamp) => `${timestamp}-new-migration`,
  },
};

export default mikroOrmConfig;
