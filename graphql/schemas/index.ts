import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date
  # union CommentTarget = Post | Comment

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    createdAt: Date!
  }

  type User {
    id: ID!
    email: String!
    createdPosts: [Post!]!
  }

  # type Comment {
  #   id: ID!
  #   author: String!
  #   target: CommentTarget!
  #   content: String!
  # }

  type Query {
    getPosts: [Post!]!
    loginUser(email: String!, password: String!): User!
  }

  type Mutation {
    createPost(title: String!, content: String!): Post!
    createUser(email: String!, password: String!): User!
  }
`;

export default typeDefs;
