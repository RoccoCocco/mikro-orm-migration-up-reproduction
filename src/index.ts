import { MikroORM } from "@mikro-orm/postgresql";
import { EntityManager } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import { Oni } from "./oni.entity";
import { deepEqual } from "assert";

async function persist(em: EntityManager, example: Oni, action: string) {
  console.log(`Before ${action} persistAndFlush: `, example.data);
  await em.persistAndFlush(example);

  console.log(`After ${action} persistAndFlush: `, example.data);

  const inDb = await em.findOneOrFail(Oni, example.id, {
    disableIdentityMap: true,
  });

  console.log(`In DB post ${action}: `, inDb.data);

  deepEqual(inDb.data, example.data);
}

async function run() {
  const orm = await MikroORM.init(mikroOrmConfig);

  const migrator = orm.getMigrator();
  await migrator.up();

  const em = orm.em.fork();

  const example = new Oni({ data: undefined });

  await persist(em, example, "create");
  example.data = { test: true };
  await persist(em, example, "update");

  await orm.close();
}

run().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
