import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';
import { Response } from 'src/common/dto/Response.dto';

@InputType()
export class UpdateEpisodeDto {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => Int, { nullable: true })
  rating?: number;
}

@ObjectType()
export class UpdateEpisodeResponse extends Response {}
