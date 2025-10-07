import React, { memo, useCallback } from "react";
import { ArticleItemType } from "../service/types";
import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globalStyles } from "../../assets/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CachedImage from "../components/CachedImage";
import moment from "moment";
import { useSelector } from "react-redux";
import { stateIsLightTheme } from "../store/themeSlice";
import colors, { darkMColors } from "../../assets/colors";

const ArticleDetails: React.FC<any> = ({ route }) => {
  const articleItem: ArticleItemType = route?.params?.item;

  const isLightTheme = useSelector(stateIsLightTheme);

  const { bottom } = useSafeAreaInsets();

  const detailsPress = useCallback(async () => {
    try {
      await Linking.openURL(articleItem?.url);
    } catch (error) {}
  }, [articleItem]);

  return (
    <View
      style={[
        isLightTheme ? globalStyles.screen : globalStyles.darkScreen,
        styles.root,
        { paddingBottom: bottom + 16 },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[styles.sourceName, isLightTheme ? undefined : styles.darkSN]}
        >
          Source : {articleItem?.source?.name}
        </Text>

        <Text style={[styles.author, isLightTheme ? undefined : styles.darkSN]}>
          Author : {articleItem?.author}
        </Text>

        <Text
          style={[styles.title, isLightTheme ? undefined : styles.darkTitle]}
        >
          {articleItem?.title}
        </Text>

        <CachedImage uri={articleItem?.urlToImage || ""} style={styles.image} />

        <Text
          style={[
            styles.publication,
            isLightTheme ? undefined : styles.darkTitle,
          ]}
        >
          {moment(new Date(articleItem?.publishedAt)).fromNow()}
        </Text>

        <Text
          style={[
            styles.description,
            isLightTheme ? undefined : styles.darkTitle,
          ]}
        >
          {articleItem?.description}
        </Text>

        <Text style={styles.content}>Content : {articleItem?.content}</Text>
      </ScrollView>

      <Button title="See Details" onPress={detailsPress} />
    </View>
  );
};

export default memo(ArticleDetails);

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  sourceName: {
    fontSize: 20,
    color: "black",
    fontWeight: "700",
  },

  darkSN: {
    color: colors.white,
  },

  author: {
    fontSize: 20,
    color: "black",
    fontWeight: "700",
    marginTop: 8,
  },

  title: {
    fontSize: 18,
    color: "darkGrey",
    marginTop: 8,
  },

  darkTitle: {
    color: darkMColors.grey,
  },

  image: {
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 8,
    marginTop: 12,
  },

  publication: {
    fontSize: 16,
    color: "darkGrey",
    marginTop: 12,
    textAlign: "right",
  },

  description: {
    fontSize: 16,
    color: "darkGrey",
    marginTop: 12,
  },

  content: {
    fontSize: 16,
    color: "grey",
    marginTop: 16,
  },
});
