import Mongoose from "mongoose";

const MONGO_USER = "mongo_user";
const MONGO_PASSWORD = "VEl64ye5tTbdvPoU";

export default Mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-ibbh3.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true }
);
