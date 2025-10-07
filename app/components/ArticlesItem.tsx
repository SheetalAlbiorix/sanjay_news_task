import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ArticleItemType } from "../service/types";
import CachedImage from "./CachedImage";
import moment from "moment";
import colors, { darkMColors } from "../../assets/colors";

type Props = {
  item: ArticleItemType;
  onPress?: () => void;
  isDarkTheme: boolean;
};

const ArticleItem: React.FC<Props> = ({ item, onPress, isDarkTheme }) => {
  return (
    <TouchableOpacity
      style={[styles.root, isDarkTheme ? styles.darkRoot : undefined]}
      onPress={onPress}
    >
      <Text style={[styles.title, isDarkTheme ? styles.darkTitle : undefined]}>
        {item?.title}
      </Text>

      <CachedImage uri={item?.urlToImage || ""} style={styles.image} />

      <Text style={[styles.desc, isDarkTheme ? styles.darkDesc : undefined]}>
        {item?.description}
      </Text>

      <Text style={[styles.time, isDarkTheme ? styles.darkDesc : undefined]}>
        {moment(new Date(item?.publishedAt)).fromNow()}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(ArticleItem);

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },

  darkRoot: {
    borderColor: darkMColors.lightGrey,
  },

  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },

  darkTitle: {
    color: colors.white,
  },

  image: {
    height: 250,
    width: "100%",
    borderRadius: 8,
    marginVertical: 8,
  },

  desc: {
    fontSize: 16,
    color: "grey",
    marginBottom: 8,
  },

  darkDesc: {
    color: darkMColors.lightGrey,
  },

  time: {
    fontSize: 16,
    color: "grey",
  },
});
