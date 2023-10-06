import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import * as React from "react";

import HomeStackNavigator from "../screens/HomeStackNavigator";
import MyRewardsStackNavigator from "../screens/MyRewardsStackNavigator";
import LocationsStackNavigator from "../screens/LocationsStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants/theme";
import DarkMode from "../components/DarkMode";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import { useDarkMode } from "../context/DarkModeContext";
import Themes from "../components/Themes";

const DrawerNavigator = ({ showHomePage }) => {
  const paperTheme = useTheme();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const styles = StyleSheet.create({
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    container: {
      backgroundColor: isDarkMode ? "black" : "white",
    },
  });

  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: COLORS.primary,
        // headerRight: () => <DrawerToggleButton />,
      }}
      styles={styles.container}
    >
      <Drawer.Screen
        name="Find Best Restuarants"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="MyRewardsStack"
        component={MyRewardsStackNavigator}
      />
      <Drawer.Screen
        name="LocationsStack"
        component={LocationsStackNavigator}
      />
      <Drawer.Screen name="DarkMode" component={DarkMode} />
      <Drawer.Screen name="Themes" component={Themes} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
