import { ObjectType, Field } from '@nestjs/graphql';
import { Response } from 'src/common/dto/Response.dto';
import { Episode } from '../entities/episode.entity';

@ObjectType()
export class GetEpisodesIdResponse extends Response {
  @Field(() => [Episode], { nullable: true })
  Episodes?: Episode[];
}

@ObjectType()
export class GetAllEpisodesResponse extends Response {
  @Field(() => [Episode], { nullable: true })
  podcasts?: Episode[];
}
