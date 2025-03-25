import React, { useContext } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ThemeContext } from "../../context/ThemeContext";

export default function SearchSortBar({
  search,
  setSearch,
  sortBy,
  setSortBy,
  showSortOptions,
  setShowSortOptions
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <View style={styles.searchSortContainer}>
        <TextInput
          style={[
            styles.searchInput,
            {
              borderColor: theme.searchBarBorder,
              backgroundColor: theme.searchBarBackground,
              color: theme.searchBarText,
            },
          ]}
          placeholder="Search Food or Restaurant"
          placeholderTextColor={theme.searchBarPlaceholder}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={[styles.sortButton, { backgroundColor: theme.sortButtonBackground }]}
          onPress={() => setShowSortOptions(!showSortOptions)}
        >
          <Text style={[styles.sortButtonText, { color: theme.sortButtonText }]}>
            Sort
          </Text>
        </TouchableOpacity>
      </View>

      {showSortOptions && (
        <View style={styles.sortFilterContainer}>
          <Picker
            selectedValue={sortBy}
            onValueChange={(value) => {
              setSortBy(value);
              setShowSortOptions(false);
            }}
          >
            <Picker.Item label="Date (Newest First)" value="date-newest" color={theme.textPrimary} />
            <Picker.Item label="Date (Oldest First)" value="date-oldest" color={theme.textPrimary} />
            <Picker.Item label="Price (Low to High)" value="price-asc" color={theme.textPrimary} />
            <Picker.Item label="Price (High to Low)" value="price-desc" color={theme.textPrimary} />
            <Picker.Item label="Calories (Low to High)" value="calories-asc" color={theme.textPrimary} />
            <Picker.Item label="Calories (High to Low)" value="calories-desc" color={theme.textPrimary} />
            <Picker.Item label="Rating (Low to High)" value="rating-asc" color={theme.textPrimary} />
            <Picker.Item label="Rating (High to Low)" value="rating-desc" color={theme.textPrimary} />
          </Picker>
        </View>
      )}

    </>
  );
}

const styles = StyleSheet.create({
  searchSortContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },

  searchInput: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    fontSize: 17,
  },

  sortButton: {
    padding: 15,
    borderRadius: 50,
  },

  sortButtonText: {
    fontWeight: "bold",
  },

  sortFilterContainer: { marginBottom: 15 },
});
