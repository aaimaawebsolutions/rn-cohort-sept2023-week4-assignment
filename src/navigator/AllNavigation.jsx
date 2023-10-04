import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AppNavigator from "./AppNavigator";
import { useContext } from "react";
import AppContext from "../context/HomeContext";
import { useDarkMode } from "../context/DarkModeContext";
import { StyleSheet, View } from "react-native";

const AllNavigation = () => {
  const { showHomePage } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();

  console.log(isDarkMode);

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

  console.log(showHomePage);
  return showHomePage ? (
    <NavigationContainer style={styles.container}>
      <DrawerNavigator style={styles.container} />
    </NavigationContainer>
  ) : (
    <AppNavigator />
  );
};

export default AllNavigation;
