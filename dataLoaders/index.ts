import createPostLoaders from "./postLoaders";
import createUserLoaders from "./userLoaders";

const createDataLoaders = () => ({
  user: createUserLoaders(),
  post: createPostLoaders()
});

export default createDataLoaders;
export type ILoaders = ReturnType<typeof createDataLoaders>;
