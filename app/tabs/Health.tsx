import { memo } from "react";
import ArticlesList from "../components/ArticlesList";

const Health = () => {
  return <ArticlesList page="health" />;
};

export default memo(Health);
