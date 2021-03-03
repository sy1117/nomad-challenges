import { Episode } from '../entities/episode.entity';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { CreatePodcastResponse } from './create-podcast.dto';

@InputType()
export class UpdatePodcastDto {
  @Field(() => String)
  readonly title?: string;
  @Field(() => String)
  readonly category?: string;
  @Field(() => String)
  readonly rating?: number;
  @Field(() => String)
  readonly episodes?: Episode[];
}

@ObjectType()
export class UpdatePodcastResponse extends CreatePodcastResponse {}
