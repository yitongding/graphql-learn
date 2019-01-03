import Scalars from "./scalars";

import { PostMutation, PostQuery, PostResolver } from "./post";
import { UserMutation, UserQuery, UserResolver } from "./user";

const Query = {
  ...PostQuery,
  ...UserQuery
};

const Mutation = {
  ...PostMutation,
  ...UserMutation
};

export default {
  ...Scalars,
  Query,
  Mutation,
  Post: PostResolver,
  User: UserResolver
} as any;
