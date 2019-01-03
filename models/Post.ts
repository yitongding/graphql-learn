import { model, Schema } from "mongoose";
import { IPost } from "./types";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Post = model<IPost>("Post", PostSchema);
export default Post;
