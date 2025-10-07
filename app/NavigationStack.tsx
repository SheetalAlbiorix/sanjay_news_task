import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Routes, { NavigationParams } from "./utils/Routes";
import ArticleDetails from "./screens/ArticleDetails";
import Settings from "./screens/Settings";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { stateIsLightTheme } from "./store/themeSlice";
import colors, { darkMColors } from "../assets/colors";

const Stack = createNativeStackNavigator<NavigationParams>();

export const navigationRef = React.createRef<any>();

const NavigationStack = () => {
  const isLightTheme = useSelector(stateIsLightTheme);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={Routes.Home}
          screenOptions={{
            headerShown: false,
            headerStyle: isLightTheme ? undefined : styles.darkHeader,
            headerTintColor: isLightTheme ? undefined : colors.white,
          }}
        >
          <Stack.Screen name={Routes.Home} component={Home} />

          <Stack.Screen
            name={Routes.Login}
            component={Login}
            options={{ headerShown: true }}
          />

          <Stack.Screen
            name={Routes.ArticleDetails}
            component={ArticleDetails}
            options={{ headerShown: true, headerTitle: "Article Details" }}
          />

          <Stack.Screen
            name={Routes.Settings}
            component={Settings}
            options={{
              headerShown: true,
              headerTitle: "Settings",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({
  darkHeader: {
    backgroundColor: darkMColors.background,
  },
});
