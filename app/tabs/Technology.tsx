import { memo } from "react";
import { View } from "react-native";
import { globalStyles } from "../../assets/styles";
import ArticlesList from "../components/ArticlesList";

const Technology = () => {
  return (
    <View style={globalStyles.screen}>
      <ArticlesList page="technology" />
    </View>
  );
};

export default memo(Technology);
