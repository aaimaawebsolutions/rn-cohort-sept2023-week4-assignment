import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeProvider";

const History = () => {
  const { theme, theme1, theme2 } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme1 ? "violet" : theme2 ? "yellow" : "#f52d56",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: theme.textColor }]}>History</Text>
    </View>
  );
};

export default History;
