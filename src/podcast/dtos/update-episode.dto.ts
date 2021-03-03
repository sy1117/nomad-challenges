import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { CreateEpisodeResponse } from './create-episode.dto';

@InputType()
export class UpdateEpisodeDto {
  @Field(() => String)
  title?: string;
  @Field(() => String)
  category?: string;
  @Field(() => String)
  rating?: number;
}

@ObjectType()
export class UpdateEpisodeResponse extends CreateEpisodeResponse {}
