import { model, Schema } from "mongoose";
import { IComment } from "./types";

const CommentSchema = new Schema(
  {
    author: {
      type: String,
      required: true
    },
    target: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "targetModel"
    },
    targetModel: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Comment = model<IComment>("Comment", CommentSchema);
export default Comment;
