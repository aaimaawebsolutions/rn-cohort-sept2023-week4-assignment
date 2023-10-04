import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDarkMode } from "../context/DarkModeContext";

const Account = () => {
  const { isDarkMode } = useDarkMode();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isDarkMode ? "black" : "white",
    },
    text: {
      color: "gray",
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account</Text>
    </View>
  );
};

export default Account;
