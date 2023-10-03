import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { COLORS, SIZES } from "../constants/theme";
import { StyleSheet } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Get Started</Text>
            <Text style={styles.subtitle}>Sign up to continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="Email"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Contact Number"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button1}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}></TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.text}>
                Already have an account? | Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h1 * 1.5,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    paddingTop: 3,
  },
  dataContainer: {
    marginTop: 50,
  },
  textinput: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  btnContainer: {
    marginTop: 50,
  },
  button1: {
    backgroundColor: COLORS.primary,
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h4,
  },
  button2: {
    flexDirection: "row",
    backgroundColor: COLORS.blue,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginRight: 10,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
    fontSize: SIZES.h5,
  },
  bottomContainer: {
    justifyContent: "center",
    marginTop: 50,
  },
});
