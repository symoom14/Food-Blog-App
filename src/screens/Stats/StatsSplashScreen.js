// src/screens/Stats/StatsSplashScreen.js
import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import styles from "../../styles/StatsSplashStyles";
import { ThemeContext } from "../../context/ThemeContext";

export default function StatsSplashScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MonthlyStats");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LottieView
        source={require("../../assets/lottie/Lottie_stat_general.json")}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
  );
}
