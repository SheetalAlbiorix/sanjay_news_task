import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useEffect } from "react";
import NavigationStack from "./NavigationStack";
import { useDispatch, useSelector } from "react-redux";
import {
  stateIsLightTheme,
  stateUserTheme,
  updateActiveTheme,
} from "./store/themeSlice";
import colors from "../assets/colors";

export default function MainApp() {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  const userChoice = useSelector(stateUserTheme);
  const isLightTheme = useSelector(stateIsLightTheme);

  useEffect(() => {
    if (userChoice === "system") {
      dispatch(updateActiveTheme(colorScheme || "light"));
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle={isLightTheme ? "dark-content" : "light-content"}
        backgroundColor={isLightTheme ? colors.white : colors.black}
      />
      <NavigationStack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
