import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

export default function SaveButton({ onPress }) {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.addentryBackground || "#daf7e7", // fallback for safety
        padding: 14,
        borderRadius: 50,
        alignItems: "center",
      }}
    >
      <Text style={{
        color: theme.success || "green",
        fontSize: 16,
        fontWeight: "600",
      }}>
        Add Entry
      </Text>
    </TouchableOpacity>
  );
}
