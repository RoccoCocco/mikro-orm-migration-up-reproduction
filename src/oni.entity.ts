import { Entity, JsonType, Property } from "@mikro-orm/core";

import {
  Being,
  BeingParams,
  BeingType,
} from "./being.entity";

type OniParams = Omit<BeingParams, "type">;

const TYPE = BeingType.ONI;

@Entity({ discriminatorValue: TYPE })
export class Oni extends Being {
  constructor(params: OniParams) {
    super(TYPE, params);
  }

  /**
   * @remarks Uncomment this for expected behaviour
   */
  // @Property({ type: JsonType, nullable: true })
  // declare data: any;
}
