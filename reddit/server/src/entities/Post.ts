import { OptionalProps, PrimaryKey, Property, Entity } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  [OptionalProps]?: "updatedAt" | "createdAt";

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  title!: string;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
