import { newsApi } from "../service/DemoRequest";
import { NewsApiArgs } from "../service/types";

const useHome = () => {
  const getArticlesListApi = async (args: NewsApiArgs) => {
    try {
      const res = await newsApi(args);

      return res;
    } catch (er) {
      throw er;
    }
  };

  return {
    getArticlesListApi,
  };
};

export default useHome;
