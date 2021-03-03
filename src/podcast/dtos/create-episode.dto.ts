import { CreatePodcastDto } from './create-podcast.dto';
import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { Response } from 'src/common/dto/Response.dto';

@InputType()
export class CreateEpisodeDto extends CreatePodcastDto {}

@ObjectType()
export class CreateEpisodeResponse extends Response {
  @Field(() => Episode, { nullable: true })
  episode?: Episode;
}
