import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { ThemeContext } from "../../context/ThemeContext";

export default function StatRow({ animation, label, value }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.row, { backgroundColor: theme.statRowBackground }]}>
      <LottieView source={animation} autoPlay loop style={styles.lottie} />
      <Text style={[styles.text, { color: theme.textPrimary }]}>
        {label}: {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },
  lottie: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    flexShrink: 1,
  },
});
