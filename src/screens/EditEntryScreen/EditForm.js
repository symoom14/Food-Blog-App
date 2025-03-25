import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/EntryFormStyles";
import { ThemeContext } from "../../context/ThemeContext";

export default function EditForm({
  name,
  setName,
  restaurant,
  setRestaurant,
  price,
  setPrice,
  calories,
  setCalories,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Text style={[styles.label, { color: theme.textPrimary }]}>
        Food Name
      </Text>
      <TextInput
        placeholder="Food Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={theme.placeholder}
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            color: theme.inputText,
            borderColor: theme.inputBorder,
          },
        ]}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>
        Restaurant
      </Text>
      <TextInput
        placeholder="Restaurant"
        value={restaurant}
        onChangeText={setRestaurant}
        placeholderTextColor={theme.placeholder}
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            color: theme.inputText,
            borderColor: theme.inputBorder,
          },
        ]}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>
        Price ($)
      </Text>
      <TextInput
        placeholder="Price ($)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholderTextColor={theme.placeholder}
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            color: theme.inputText,
            borderColor: theme.inputBorder,
          },
        ]}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>
        Calories
      </Text>
      <TextInput
        placeholder="Calories"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
        placeholderTextColor={theme.placeholder}
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            color: theme.inputText,
            borderColor: theme.inputBorder,
          },
        ]}
      />
    </>
  );
}
