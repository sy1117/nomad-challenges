import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Episode {
  @Field((type) => Float)
  id: number;
  @Field((type) => String)
  title: string;
  @Field((type) => String)
  category: string;
  @Field((type) => Int)
  rating: number;
}
