import DataLoader from "dataloader";
import _ from "lodash";
import Post from "../models/Post";
import { IPost } from "../models/types";

const byIds = async (postIds: string[]) => {
  const posts = await Post.find({ _id: { $in: postIds } });
  const postIdMap = _.keyBy(posts, "_id");
  return postIds.map(id => postIdMap[id]);
};

const byAuthors = async (userIds: string[]) => {
  const posts = await Post.find({ author: { $in: userIds } });
  const authorIdMap = posts.reduce<{ [id: string]: IPost[] }>((acc, cur) => {
    acc[cur.author] = acc[cur.author] ? [...acc[cur.author], cur] : [cur];
    return acc;
  }, {});
  return userIds.map(id => authorIdMap[id]);
};

const createPostLoaders = () => ({
  byIds: new DataLoader(byIds),
  byAuthors: new DataLoader(byAuthors)
});

export default createPostLoaders;
