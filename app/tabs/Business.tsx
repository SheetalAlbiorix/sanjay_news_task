import { memo } from "react";
import ArticlesList from "../components/ArticlesList";

const Business = () => {
  return <ArticlesList page="business" />;
};

export default memo(Business);
