import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Response {
  @Field((returns) => String, { nullable: true })
  err?: string;
}
