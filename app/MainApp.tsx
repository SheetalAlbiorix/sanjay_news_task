import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { useEffect } from "react";
import NavigationStack from "./NavigationStack";
import { useDispatch, useSelector } from "react-redux";
import { stateUserTheme, updateActiveTheme } from "./store/themeSlice";

export default function MainApp() {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  const userChoice = useSelector(stateUserTheme);

  useEffect(() => {
    if (userChoice === "system") {
      dispatch(updateActiveTheme(colorScheme || "light"));
    }
  }, []);

  return <NavigationStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
