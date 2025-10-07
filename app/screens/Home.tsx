import { memo, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Technology from "../tabs/Technology";
import Business from "../tabs/Business";
import Health from "../tabs/Health";
import Sports from "../tabs/Sports";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import icons from "../../assets/images/icons";
import { navigationRef } from "../NavigationStack";
import Routes from "../utils/Routes";
import colors, { darkMColors } from "../../assets/colors";
import { useSelector } from "react-redux";
import { stateIsLightTheme } from "../store/themeSlice";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const isLightTheme = useSelector(stateIsLightTheme);

  const onRightPress = useCallback(() => {
    navigationRef.current.navigate(Routes.Settings);
  }, []);

  const headerRight = useCallback(() => {
    return (
      <TouchableOpacity onPress={onRightPress}>
        <Image
          source={icons.setting}
          resizeMode="contain"
          style={styles.settings}
          tintColor={isLightTheme ? undefined : colors.white}
        />
      </TouchableOpacity>
    );
  }, [isLightTheme]);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerRight: headerRight,
        headerStyle: isLightTheme ? undefined : styles.darkHeader,
        headerTintColor: isLightTheme ? undefined : colors.white,
        tabBarStyle: isLightTheme ? undefined : styles.darkTabs,
        tabBarActiveTintColor: isLightTheme ? undefined : colors.white,
      }}
    >
      <Tabs.Screen
        name="Technology"
        component={Technology}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={icons.technology}
                style={{ height: size, width: size }}
                tintColor={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="Business"
        component={Business}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={icons.business}
                style={{ height: size, width: size }}
                tintColor={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="Health"
        component={Health}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={icons.health}
                style={{ height: size, width: size }}
                tintColor={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={icons.sports}
                style={{ height: size, width: size }}
                tintColor={color}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  settings: {
    height: 24,
    width: 24,
    marginRight: 16,
  },

  darkHeader: {
    backgroundColor: darkMColors.headerBackground,
  },

  darkTabs: {
    backgroundColor: darkMColors.tabBackground,
  },
});
