import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

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
