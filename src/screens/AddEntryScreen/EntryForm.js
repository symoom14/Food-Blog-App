import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Slider from "@react-native-community/slider";
import styles from "../../styles/EntryFormStyles";
import { ThemeContext } from "../../context/ThemeContext";
import { ratingLabels, getRatingColor } from "../../utils/ratingUtils";
import SaveButton from "./SaveButton";

export default function EntryForm({
  name, setName,
  restaurant, setRestaurant,
  price, setPrice,
  calories, setCalories,
  rating, setRating,
  date, setDate,
  showDatePicker, setShowDatePicker,
  saveEntry,
}) {
  const { theme } = useContext(ThemeContext);

  // State for focus handling
  const [focusedField, setFocusedField] = useState(null);

  const getInputStyle = (fieldName) => [
    styles.input,
    {
      backgroundColor: theme.inputBackground,
      color: theme.inputText,
      borderColor:
        focusedField === fieldName ? "#007bff" : theme.inputBorder,
    },
  ];

  return (
    <View style={[styles.formCard, { backgroundColor: theme.cardBackground }]}>
      <Text style={[styles.label, { color: theme.textPrimary }]}>Food Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={getInputStyle("name")}
        onFocus={() => setFocusedField("name")}
        onBlur={() => setFocusedField(null)}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>Restaurant</Text>
      <TextInput
        value={restaurant}
        onChangeText={setRestaurant}
        style={getInputStyle("restaurant")}
        onFocus={() => setFocusedField("restaurant")}
        onBlur={() => setFocusedField(null)}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={getInputStyle("price")}
        onFocus={() => setFocusedField("price")}
        onBlur={() => setFocusedField(null)}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
        style={getInputStyle("calories")}
        onFocus={() => setFocusedField("calories")}
        onBlur={() => setFocusedField(null)}
      />

      <Text style={[styles.label, { color: getRatingColor(rating) }]}>
        Rating: {ratingLabels[rating]} ⭐
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5}
        step={1}
        value={rating}
        onValueChange={setRating}
        minimumTrackTintColor={getRatingColor(rating)}
        maximumTrackTintColor="#ccc"
        thumbTintColor={getRatingColor(rating)}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>Date</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={[styles.datePicker, { backgroundColor: theme.inputBackground }]}
      >
        <Text style={{ color: theme.textPrimary }}>
          {date.toDateString()}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}
      <SaveButton onPress={saveEntry} />
    </View>
  );
}
