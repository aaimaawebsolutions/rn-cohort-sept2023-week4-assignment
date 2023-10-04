import React from "react";
import { View, Text, StyleSheet } from "react-native";

const History = () => {
  return (
    <View>
      <Text>History</Text>
    </View>
  );
};

export default History;

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
