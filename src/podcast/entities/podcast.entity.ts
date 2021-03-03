import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Episode } from './episode.entity';

@ObjectType()
export class Podcast {
  @Field((type) => Float)
  id: number;
  @Field((type) => String)
  title: string;
  @Field((type) => String)
  category: string;
  @Field((type) => Int)
  rating: number;
  @Field((type) => [Episode], { nullable: true })
  episodes?: Episode[];
}
