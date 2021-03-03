import { CreatePodcastDto } from './create-podcast.dto';
import { InputType, Field, ObjectType, Float } from '@nestjs/graphql';
import { Response } from 'src/common/dto/Response.dto';

@InputType()
export class CreateEpisodeDto extends CreatePodcastDto {}

@ObjectType()
export class CreateEpisodeResponse extends Response {
  @Field(() => Float, { nullable: true })
  episodeId?: number;
}
