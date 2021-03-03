import { InputType, ObjectType, Field, Float } from '@nestjs/graphql';
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
  @Field(() => Float, { nullable: true })
  id?: number;
}
