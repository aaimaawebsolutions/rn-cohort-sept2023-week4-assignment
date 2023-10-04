import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AppNavigator from "./AppNavigator";
import { useContext } from "react";
import AppContext from "../context/HomeContext";

const AllNavigation = () => {
  const { showHomePage } = useContext(AppContext);
  console.log(showHomePage);
  return showHomePage ? (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  ) : (
    <AppNavigator />
  );
};

export default AllNavigation;
