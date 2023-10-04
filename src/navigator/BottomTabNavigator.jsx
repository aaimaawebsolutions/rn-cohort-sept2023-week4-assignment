import * as React from "react";
import {
  create,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, StyleSheet } from "react-native";
import HomeStackNavigator from "../screens/HomeStackNavigator";
import BookStackNavigator from "../screens/BookStackNavigator";
import ContactStackNavigator from "../screens/ContactStackNavigator";
import HomeScreen from "../screens/HomeScreen";
import History from "../screens/History";
import Favourites from "../screens/Favourites";
import Account from "../screens/Account";
import Cart from "../screens/Cart";
import { COLORS } from "../constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Find Best Restuarants"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={color}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Tab.Screen
        name="Find Best Restuarants"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-heart-outline"
              color={color}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12,
  },
});

export default BottomTabNavigator;
