import { Document } from "mongoose";
import Comment from "../../models/Comment";
import Post from "../../models/Post";
import { IComment } from "../../models/types";

const getComments = async (_: any, arg: { targetId: string }) => {
  return Comment.find({ target: arg.targetId });
};

export const CommentResolver = {
  __resolveType: (obj: Document) => obj.modelName,
  target: (parent: IComment) => null
};
