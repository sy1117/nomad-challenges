import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';
import { Response } from 'src/common/dto/Response.dto';

@InputType()
export class CreatePodcastDto {
  @Field(() => String)
  readonly title: string;

  @Field(() => String)
  readonly category: string;
}

@ObjectType()
export class CreatePodcastResponse extends Response {
  @Field(() => Podcast, { nullable: true })
  podcast?: Podcast;
}
