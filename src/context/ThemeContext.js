import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../styles/theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("system"); // 'light', 'dark', or 'system'
  const [systemColorScheme, setSystemColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const loadThemePreference = async () => {
      const storedMode = await AsyncStorage.getItem("themeMode");
      if (storedMode) setThemeMode(storedMode);
    };

    loadThemePreference();

    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemColorScheme(colorScheme);
    });

    return () => listener.remove();
  }, []);

  const saveThemePreference = async (mode) => {
    setThemeMode(mode);
    await AsyncStorage.setItem("themeMode", mode);
  };

  const isDark =
    themeMode === "dark" || (themeMode === "system" && systemColorScheme === "dark");

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{ theme, isDark, themeMode, setThemeMode: saveThemePreference }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
