import bcryptjs from "bcryptjs";
import { IContext } from "../../context";
import { IUser } from "../../models/types";
import User from "../../models/User";

const createUser = async (
  _: any,
  { email, password }: { email: string; password: string },
  { loaders }: IContext
) => {
  const existUser = await loaders.user.byEmails.load(email);
  if (existUser) {
    throw new Error("Email used.");
  }

  const passwordHash = await bcryptjs.hash(password, 12);
  const user = new User({
    email,
    passwordHash
  });
  await user.save();
  return user;
};

const loginUser = async (
  _: any,
  { email, password }: { email: string; password: string },
  { loaders }: IContext
) => {
  const user = await loaders.user.byEmails.load(email);
  if (!user) {
    throw new Error("User not found");
  }

  const match = await bcryptjs.compare(password, user.passwordHash);
  if (!match) {
    throw new Error("Wrong password");
  }

  return user;
};

export const UserResolver = {
  createdPosts: (parent: IUser, _: any, { loaders }: IContext) =>
    loaders.post.byAuthors.load(parent.id)
};

export const UserQuery = {
  loginUser
};

export const UserMutation = {
  createUser
};
