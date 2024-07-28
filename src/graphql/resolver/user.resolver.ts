import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserArgs } from '../args/create-user.args';
import { UserObject } from '../objects/user.object';

@Resolver()
export class UserResolver {
  @Query(() => String)
  users() {
    return 'Hello Word';
  }

  @Mutation(() => UserObject)
  createOneUser(@Args() args: CreateUserArgs) {
    return args.data;
  }
}
