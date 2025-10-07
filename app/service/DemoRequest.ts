import { APIManager, RequestType } from "./ServiceManager";
import { NewsApiArgs, NewsApiRes } from "./types";

export const newsApi = (args: NewsApiArgs): Promise<NewsApiRes> => {
  let data = {
    url: `https://newsapi.org/v2/everything?q=${args.type}&from=2025-09-06&sortBy=publishedAt&apiKey=faba4668746741a19fe9cf82b9af7875`,
    body: undefined,
  };

  return APIManager(data, RequestType.get, false, false)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
