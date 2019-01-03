import { Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
}

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  createdPosts: string[];
}

export interface IComment extends Document {
  author: string;
  target: string;
  targetModel: string;
  content: string;
}
