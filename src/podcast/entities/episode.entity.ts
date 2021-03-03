import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Episode {
  @Field()
  id: number;
  @Field()
  title: string;
  @Field()
  category: string;
  @Field()
  rating: number;
}
