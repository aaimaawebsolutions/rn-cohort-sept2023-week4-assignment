import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "../context/ThemeProvider";

const Themes = () => {
  const { theme, theme1, theme2, toggleTheme1, toggleTheme2 } = useTheme();
  //   console.log(theme);

  //   const changeTheme = (themeName) => {
  //     if (theme1 && !theme2) {
  //       backgroundColor = "red";
  //     }
  //   };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme1 ? "violet" : theme2 ? "yellow" : "#f52d56",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      alignItems: "center",
    },
    themeBox: {
      flexDirection: "row",
    },
    themeContainer: {
      alignItems: "center",
    },
  });

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: theme.textColor }]}>
        Select Theme
      </Text>
      <View style={styles.themeContainer}>
        <View style={styles.themeBox}>
          <Switch
            style={{ marginRight: 20, marginBottom: 30 }}
            value={theme1}
            onValueChange={toggleTheme1}
            color="blue"
          />
          <Text>Theme1</Text>
        </View>
        <View style={styles.themeBox}>
          <Switch
            style={{ marginRight: 20, marginBottom: 30 }}
            value={theme2}
            onValueChange={toggleTheme2}
            color="blue"
          />
          <Text>Theme2</Text>
        </View>
      </View>
    </View>
  );
};

export default Themes;
