import { StyleSheet } from "react-native";
import { darkMColors } from "../colors";

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  darkScreen: {
    flex: 1,
    backgroundColor: darkMColors.background,
  },
});
