import DataLoader from "dataloader";
import _ from "lodash";
import User from "../models/User";

const byIds = async (userIds: string[]) => {
  const users = await User.find({ _id: { $in: userIds } });
  const userIdMap = _.keyBy(users, "_id");
  return userIds.map(id => userIdMap[id]);
};

const byEmails = async (emails: string[]) => {
  const users = await User.find({ email: { $in: emails } });
  const userEmailMap = _.keyBy(users, "email");
  return emails.map(email => userEmailMap[email]);
};

const createUserLoaders = () => ({
  byIds: new DataLoader(byIds),
  byEmails: new DataLoader(byEmails)
});

export default createUserLoaders;
