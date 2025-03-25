// src/screens/Map/MappingSplashScreen.js
import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Platform, Linking } from "react-native";
import LottieView from "lottie-react-native";
import styles from "../../styles/MappingSplashStyles";
import { ThemeContext } from "../../context/ThemeContext";

export default function MappingSplashScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = "restaurants around me";
      const url = Platform.select({
        ios: `http://maps.apple.com/?q=${query}`,
        android: `geo:0,0?q=${query}`,
      });

      Linking.openURL(url).catch((err) =>
        console.error("Error opening maps:", err)
      );

      navigation.goBack();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LottieView
        source={require("../../assets/lottie/Lottie_mapping_splash.json")}
        autoPlay
        loop={false}
        style={styles.lottie}
      />
    </View>
  );
}
