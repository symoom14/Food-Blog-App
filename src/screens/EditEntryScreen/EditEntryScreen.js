import React, { useState, useContext } from "react";
import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ViewEntry from "./ViewEntry";
import EditForm from "./EditForm";
import EditButtons from "./EditButtons";
import styles from "../../styles/EditEntryStyles";
import { ThemeContext } from "../../context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditEntryScreen({ route, navigation }) {
  const { entry } = route.params || {};
  const { theme } = useContext(ThemeContext);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(entry?.name || "");
  const [restaurant, setRestaurant] = useState(entry?.restaurant || "");
  const [price, setPrice] = useState(entry?.price ? entry.price.toString() : "");
  const [calories, setCalories] = useState(entry?.calories ? entry.calories.toString() : "");

  if (!entry) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.errorText, { color: theme.danger || "red" }]}>
          Error: Entry not found.
        </Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    );
  }

  const saveChanges = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem("foodEntries");
      const entries = storedEntries ? JSON.parse(storedEntries) : [];

      const updatedEntries = entries.map((item) =>
        item.id === entry.id
          ? {
              ...item,
              name,
              restaurant,
              price: parseFloat(price) || null,
              calories: parseInt(calories) || null,
            }
          : item
      );

      await AsyncStorage.setItem("foodEntries", JSON.stringify(updatedEntries));
      Alert.alert("Success", "Entry updated!");
      navigation.goBack();
    } catch (error) {
      console.error("Error updating entry:", error);
      Alert.alert("Error", "Failed to update entry.");
    }
  };

  const deleteEntry = async () => {
    Alert.alert("Confirm Deletion", "Are you sure you want to delete this entry?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            const storedEntries = await AsyncStorage.getItem("foodEntries");
            const entries = storedEntries ? JSON.parse(storedEntries) : [];
            const filtered = entries.filter((item) => item.id !== entry.id);

            await AsyncStorage.setItem("foodEntries", JSON.stringify(filtered));
            Alert.alert("Deleted", "Entry has been removed.");
            navigation.goBack();
          } catch (error) {
            console.error("Error deleting entry:", error);
            Alert.alert("Error", "Failed to delete entry.");
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>Food</Text>

      {!isEditing ? (
        <ViewEntry entry={entry} onEditPress={() => setIsEditing(true)} />
      ) : (
        <>
          <EditForm
            name={name}
            setName={setName}
            restaurant={restaurant}
            setRestaurant={setRestaurant}
            price={price}
            setPrice={setPrice}
            calories={calories}
            setCalories={setCalories}
          />
          <EditButtons onSave={saveChanges} onDelete={deleteEntry} />
        </>
      )}
    </SafeAreaView>
  );
}
