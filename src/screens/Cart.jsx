import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useTheme } from "../context/ThemeProvider";

const Profile = ({ navigation }) => {
  const { theme, theme1, theme2 } = useTheme();

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
    },
  });

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: theme.textColor }]}>Cart</Text>
      <Button
        onPress={() => navigation.navigate("History")}
        title="Move to another screen!"
        color={theme.nav.backgroundColor}
      />
    </View>
  );
};

export default Profile;
