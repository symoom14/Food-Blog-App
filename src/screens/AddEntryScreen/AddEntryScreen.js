import React, { useState, useContext } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerButton from "./ImagePickerButton";
import EntryForm from "./EntryForm";
import SaveButton from "./SaveButton";
import AddEntryStyles from "../../styles/AddEntryStyles";
import { ThemeContext } from "../../context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddEntryScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [price, setPrice] = useState("");
  const [calories, setCalories] = useState("");
  const [rating, setRating] = useState(3);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { theme } = useContext(ThemeContext);
  const styles = AddEntryStyles(theme);

  const saveEntry = async () => {
    if (!name || !restaurant || !date || !image) {
      Alert.alert("Missing Information", "Please enter all details before saving.");
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      name,
      restaurant,
      price: price ? parseFloat(price) : null,
      calories: calories ? parseInt(calories, 10) : null,
      rating,
      image,
      date: date.toISOString(),
    };

    try {
      const storedEntries = await AsyncStorage.getItem("foodEntries");
      const entries = storedEntries ? JSON.parse(storedEntries) : [];
      entries.push(newEntry);
      await AsyncStorage.setItem("foodEntries", JSON.stringify(entries));

      Alert.alert("Success", "Entry saved successfully!");
      setName("");
      setRestaurant("");
      setPrice("");
      setCalories("");
      setImage(null);
      setDate(new Date());
      setRating(3);
      navigation.navigate("History");
    } catch (error) {
      console.error("Error saving entry:", error);
      Alert.alert("Error", "Failed to save entry.");
    }
  };

  return (
    <SafeAreaView style={[styles.safeContainer, { flex: 1, paddingTop: 20 }]}>
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}
    contentContainerStyle={{ paddingBottom: 120, flexGrow: 1 }} // 👈 Important
    keyboardShouldPersistTaps="handled">
      <View style={styles.formContainer}>
        <Text style={[styles.title, { color: theme.textPrimary }]}>
          Enter new food details
        </Text>

        <ImagePickerButton
          onImagePicked={setImage}
          style={styles.imageButton}
          textStyle={styles.imageButtonText}
        />

        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

        <EntryForm
          name={name}
          setName={setName}
          restaurant={restaurant}
          setRestaurant={setRestaurant}
          price={price}
          setPrice={setPrice}
          calories={calories}
          setCalories={setCalories}
          rating={rating}
          setRating={setRating}
          date={date}
          setDate={setDate}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          saveEntry={saveEntry}
        />


      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
