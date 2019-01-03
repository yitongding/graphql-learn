import createDataLoaders from "./dataLoaders";

const userId = () => {
  return { user: "5c2d864cbccb4a0780e163d6" };
};

const context = () => {
  return { ...userId(), loaders: createDataLoaders() };
};

export default context;
export type IContext = ReturnType<typeof context>;
