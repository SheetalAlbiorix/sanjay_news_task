import { memo, useCallback, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { globalStyles } from "../../assets/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemeSelector, { ThemeType } from "../components/modal/ThemeSelector";
import { ModalRefType } from "../components/modal/index.types";
import { useDispatch, useSelector } from "react-redux";
import {
  stateIsLightTheme,
  stateUserTheme,
  updateThemeState,
} from "../store/themeSlice";
import colors, { darkMColors } from "../../assets/colors";

const Settings = () => {
  const { bottom } = useSafeAreaInsets();

  const dispatch = useDispatch();
  const userTheme = useSelector(stateUserTheme);
  const isLightTheme = useSelector(stateIsLightTheme);

  const colorScheme = useColorScheme();

  const themeModalRef = useRef<ModalRefType>(null);

  const onThemePress = useCallback(() => {
    themeModalRef.current?.show();
  }, []);

  const onThemeConfirm = useCallback(
    (theme: ThemeType) => {
      if (theme === "system") {
        dispatch(
          updateThemeState({
            userChoice: "system",
            activeTheme: colorScheme || "light",
          })
        );

        return;
      }

      dispatch(
        updateThemeState({
          userChoice: theme,
          activeTheme: theme,
        })
      );
    },
    [colorScheme]
  );

  return (
    <View
      style={[
        isLightTheme ? globalStyles.screen : globalStyles.darkScreen,
        styles.root,
        { paddingBottom: bottom + 16 },
      ]}
    >
      <TouchableOpacity
        style={[styles.itemCont, isLightTheme ? undefined : styles.darkIC]}
        onPress={onThemePress}
      >
        <Text
          style={[styles.itemLeft, isLightTheme ? undefined : styles.darkIL]}
        >
          Theme
        </Text>

        <Text
          style={[styles.itemRight, isLightTheme ? undefined : styles.darkIR]}
        >
          {userTheme}
        </Text>
      </TouchableOpacity>

      <ThemeSelector ref={themeModalRef} onThemeSelect={onThemeConfirm} />
    </View>
  );
};

export default memo(Settings);

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },

  itemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    height: 56,
    borderRadius: 8,
    borderColor: "grey",
    paddingHorizontal: 16,
  },

  darkIC: {
    borderColor: colors.grey,
  },

  itemLeft: {
    fontSize: 16,
    color: "black",
  },

  darkIL: {
    color: colors.white,
  },

  itemRight: {
    fontSize: 16,
    color: "grey",
    textTransform: "capitalize",
  },

  darkIR: {
    color: darkMColors.lightGrey,
  },
});
