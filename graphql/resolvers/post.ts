import { IContext } from "../../context";
import Post from "../../models/Post";
import { IPost } from "../../models/types";

const getPosts = async () => Post.find();

const createPost = async (
  _: any,
  {
    title,
    content
  }: {
    title: string;
    content: string;
  },
  { user }: { user: string }
) => {
  const post = new Post({
    title,
    content,
    author: user
  });
  await post.save();
  return post;
};

export const PostResolver = {
  author: (parent: IPost, _: any, { loaders }: IContext) =>
    loaders.user.byIds.load(parent.author)
};

export const PostQuery = {
  getPosts
};

export const PostMutation = {
  createPost
};
