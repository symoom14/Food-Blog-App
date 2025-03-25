import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/SettingsStyles";
import { RadioButton } from "react-native-paper";

export default function SettingsScreen() {
  const { theme, themeMode, setThemeMode } = useContext(ThemeContext);

  const handleThemeChange = (value) => {
    setThemeMode(value); // "light", "dark", or "system"
  };

  const resetEntries = async () => {
    Alert.alert("Confirm Deletion", "Delete all entries? This action is irreversible.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("foodEntries");
          Alert.alert("Reset Complete", "All entries have been deleted.");
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
        <Text style={[styles.heading, { color: theme.textPrimary }]}>The Food Blog App</Text>
        <Text style={[styles.subHeading, { color: theme.textSecondary }]}>Version 1.3.0</Text>
        <Text style={[styles.subText, { color: theme.textSecondary }]}>You're running a developmental build.</Text>
        <Text style={[styles.subText, { color: theme.textSecondary }]}>Developer: Azwad Akbar Symoom</Text>
      </View>
      
      <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
        <Text style={[styles.subHeading, { color: theme.textPrimary, textAlign: "left", marginBottom: 30 }]}>
          Choose Theme
        </Text>

        <RadioButton.Group onValueChange={handleThemeChange} value={themeMode}>
          <View style={styles.radioRow}>
            <RadioButton value="light" color={theme.primary} />
            <Text style={[styles.radioLabel, { color: theme.textPrimary }]}>Light Theme</Text>
          </View>

          <View style={styles.radioRow}>
            <RadioButton value="dark" color={theme.primary} />
            <Text style={[styles.radioLabel, { color: theme.textPrimary }]}>Dark Theme</Text>
          </View>

          <View style={styles.radioRow}>
            <RadioButton value="system" color={theme.primary} />
            <Text style={[styles.radioLabel, { color: theme.textPrimary }]}>Use System Theme</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.deleteButton} onPress={resetEntries}>
          <Text style={styles.deleteButtonText}>Delete All Entries</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
