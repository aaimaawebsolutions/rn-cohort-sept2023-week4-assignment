import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDarkMode } from "../context/DarkModeContext";
import { useTheme } from "../context/ThemeProvider";

const Favourites = () => {
  const { isDarkMode } = useDarkMode();
  const { theme1, theme2 } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isDarkMode ? "black" : "white",
      backgroundColor: theme1 ? "violet" : theme2 ? "yellow" : "#f52d56",
    },
    text: {
      color: "gray",
      fontSize: 18,
      color: theme1 ? "black" : theme2 ? "violet" : "white",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourites</Text>
    </View>
  );
};

export default Favourites;
