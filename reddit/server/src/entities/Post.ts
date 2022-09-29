import { OptionalProps, PrimaryKey, Property, Entity } from "@mikro-orm/core";

@Entity()
export class Post {
  [OptionalProps]?: "updatedAt" | "createdAt";

  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
