import {
  Entity,
  Enum,
  JsonType,
  PrimaryKey,
  Property,
  UuidType,
} from "@mikro-orm/core";
import { v4 } from "uuid";

export enum BeingType {
  AKUMA = "AKUMA",
  ONI = "ONI",
}

export interface BeingParams<Data = any> {
  data: Data;
}

@Entity({ discriminatorColumn: "type", abstract: true })
export class Being {
  constructor(type: BeingType, params: BeingParams) {
    this.type = type;
    this.data = params.data;
  }

  @PrimaryKey({ type: UuidType })
  id: string = v4();

  @Enum(() => BeingType)
  type!: BeingType;

  @Property({ type: JsonType, nullable: true })
  data: any;
}
