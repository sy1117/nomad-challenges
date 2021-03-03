import { ObjectType, Field } from '@nestjs/graphql';
import { Response } from 'src/common/dto/Response.dto';
import { Podcast } from '../entities/podcast.entity';

@ObjectType()
export class GetPodCastResponse extends Response {
  @Field(() => Podcast, { nullable: true })
  podcast?: Podcast;
}

@ObjectType()
export class GetAllPodCastsResponse extends Response {
  @Field(() => [Podcast], { nullable: true })
  podcasts?: Podcast[];
}
