// src/screens/Stats/StatCard.js
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { ThemeContext } from "../../context/ThemeContext";

export default function StatCard({ title, value, animation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.statRow, { backgroundColor: theme.statCardBackground }]}>
      <LottieView source={animation} autoPlay loop style={styles.lottie} />
      <View style={styles.textContainer}>
        <Text style={[styles.statTitle, { color: theme.statCardTitle }]}>{title}</Text>
        <Text style={[styles.statValue, { color: theme.statCardValue }]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    elevation: 3,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  lottie: {
    width: 80,
    height: 80,
  },
  textContainer: {
    marginLeft: 20,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
});
