import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultTheme } from "../helper/ThemeStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const [theme1, setTheme1] = useState(false);
  const [theme2, setTheme2] = useState(false);

  const toggleTheme1 = () => {
    setTheme1(!theme1);
  };

  const toggleTheme2 = () => {
    setTheme2(!theme2);
  };

  const toggleTheme = (theme) => {
    if (theme === theme1) {
      setTheme1(true);
      setTheme2(false);
    } else {
      setTheme1(false);
      setTheme2(true);
    }
  };

  const saveThemePreference = async (theme1) => {
    try {
      await AsyncStorage.setItem("theme1", theme1);
    } catch (error) {
      console.error("Error saving theme preference:", error);
    }
  };

  const getThemePreference = async () => {
    try {
      const themeAsync = await AsyncStorage.getItem("theme1");
      return themeAsync;
    } catch (error) {
      console.error("Error retrieving theme preference:", error);
      return null;
    }
  };

  useEffect(() => {
    // Load the theme preference from AsyncStorage when the component mounts
    getThemePreference().then((storedTheme) => {
      if (storedTheme) {
        setTheme(storedTheme);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, theme1, theme2, toggleTheme1, toggleTheme2, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
