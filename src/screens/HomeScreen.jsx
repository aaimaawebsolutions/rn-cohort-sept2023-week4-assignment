import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
// import { Icon } from "react-native-vector-icons/Icon";
import { COLORS, SIZES } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import Restuarants from "../components/Restaurants";
import DATA from "../data/data.json";
import { useDarkMode } from "../context/DarkModeContext";

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useDarkMode();
  // filter by price type
  const filterData = (price) =>
    DATA.restaurants.filter((result) => result.price === price);

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
    top: {
      backgroundColor: isDarkMode ? "black" : "white",
      padding: 10,
      alignItems: "center",
    },
    searchBox: {
      flexDirection: "row",
      width: SIZES.width - 20,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 5,
    },
    search: {
      marginLeft: 10,
      color: COLORS.title,
    },
  });

  return (
    <View>
      <View style={styles.top}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={25} color={COLORS.grey} />

          <TextInput
            placeholder="what you like to eat?"
            style={styles.search}
          />
        </View>
      </View>
      <ScrollView>
        <Restuarants title={"Cost Effective"} data={filterData("$")} />
        <Restuarants title={"Bit Pricer"} data={filterData("$")} />
        <Restuarants title={"Big Spender"} data={filterData("$")} />
        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
