import { memo } from "react";
import ArticlesList from "../components/ArticlesList";

const Sports = () => {
  return <ArticlesList page="sports" />;
};

export default memo(Sports);
