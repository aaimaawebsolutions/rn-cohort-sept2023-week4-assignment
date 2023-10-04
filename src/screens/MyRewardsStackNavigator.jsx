import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MyRewards = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>MyRewards screen!</Text>
  </View>
);

const MyRewardsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyRewards" component={MyRewards} />
    </Stack.Navigator>
  );
};

export default MyRewardsStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
