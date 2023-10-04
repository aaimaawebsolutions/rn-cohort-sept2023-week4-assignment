import * as React from "react";

import HomeStackNavigator from "../screens/HomeStackNavigator";
import MyRewardsStackNavigator from "../screens/MyRewardsStackNavigator";
import LocationsStackNavigator from "../screens/LocationsStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants/theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ showHomePage }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: COLORS.primary,
      }}
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
      <Drawer.Screen name="DarkMode" component={LocationsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
