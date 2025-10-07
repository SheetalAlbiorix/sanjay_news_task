import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { handleApiError } from "../error";
import useHome from "../hooks/useHome";
import { ArticleItemType } from "../service/types";
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { globalStyles } from "../../assets/styles";
import ArticlesItem from "./ArticlesItem";
import { useDispatch, useSelector } from "react-redux";
import { DataStateType, stateUpdateData } from "../store/dataSlice";
import SearchBar from "./SearchBar";
import { useNavigation } from "@react-navigation/native";
import Routes from "../utils/Routes";
import ErrorPage from "./ErrorPage";
import { stateIsLightTheme } from "../store/themeSlice";

type Props = {
  page: "technology" | "business" | "health" | "sports";
};

const ArticlesList: React.FC<Props> = ({ page }) => {
  const { getArticlesListApi } = useHome();

  const isLightTheme = useSelector(stateIsLightTheme);

  const [searchValue, setSearchValue] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const articles =
    useSelector((state: DataStateType) => state.data[page]) || [];

  const getArticles = useCallback(
    async (isRefresh?: boolean) => {
      try {
        if (isRefresh) {
          setIsRefreshing(true);
        }
        const res = await getArticlesListApi({ type: page });
        setIsRefreshing(false);
        if (isError) {
          setIsError(false);
        }

        dispatch(stateUpdateData({ key: page, items: res?.articles || [] }));
      } catch (er) {
        handleApiError(er);
      }
    },
    [page, isError]
  );

  useEffect(() => {
    getArticles();
  }, []);

  const onItemPress = useCallback((item: ArticleItemType) => {
    navigation.navigate(Routes.ArticleDetails, { item } as any);
  }, []);

  const renderItem: ListRenderItem<ArticleItemType> = useCallback(
    ({ item }) => {
      return (
        <ArticlesItem
          item={item}
          onPress={onItemPress?.bind(null, item)}
          isDarkTheme={!isLightTheme}
        />
      );
    },
    [onItemPress, isLightTheme]
  );

  const refreshControl = useMemo(() => {
    return (
      <RefreshControl
        refreshing={isRefreshing}
        onRefresh={getArticles?.bind(null, true)}
      />
    );
  }, [isRefreshing, getArticles]);

  if (isError) {
    return <ErrorPage onTryAgain={getArticles} />;
  }

  return (
    <View
      style={[
        isLightTheme ? globalStyles.screen : globalStyles.darkScreen,
        styles.root,
      ]}
    >
      <SearchBar
        value={searchValue}
        onValueChange={setSearchValue}
        onClear={setSearchValue?.bind(null, "")}
      />

      <FlatList
        data={
          searchValue?.trim()?.length
            ? articles?.filter((item) =>
                item?.title
                  ?.toLowerCase()
                  ?.includes(searchValue?.trim()?.toLowerCase())
              )
            : articles
        }
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        keyExtractor={(_, ind) => ind.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={refreshControl}
      />
    </View>
  );
};

export default memo(ArticlesList);

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
});
