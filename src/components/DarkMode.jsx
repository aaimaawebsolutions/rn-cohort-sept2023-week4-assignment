import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native-paper";
import { useDarkMode } from "../context/DarkModeContext";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isDarkMode ? "black" : "white",
    },
    text: {
      color: isDarkMode ? "white" : "black",
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{!isDarkMode ? "Light " : "Dark"} </Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} color="gray" />
    </View>
  );
};

export default DarkMode;
