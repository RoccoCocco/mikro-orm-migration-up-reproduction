import { Entity, JsonType, Property } from "@mikro-orm/core";

import { Being, BeingParams, BeingType } from "./being.entity";

type AkumaData = { assigment: number };
type AkumaParams = BeingParams<AkumaData>;

const TYPE = BeingType.AKUMA;

@Entity({ discriminatorValue: TYPE })
export class Akuma extends Being {
  constructor(params: AkumaParams) {
    super(TYPE, params);
  }

  /**
   * @remarks This child redeclares data property as nullable, which differs from parent
   */
  @Property({ type: JsonType, nullable: false })
  declare data: AkumaData;
}
