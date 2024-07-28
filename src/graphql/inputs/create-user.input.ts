import { MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({
    nullable: false,
    defaultValue: 'John',
    description: 'Name of user',
  })
  @MinLength(2)
  name: string;

  @Field()
  email: string;
}
