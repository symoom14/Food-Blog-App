import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { format, parseISO } from "date-fns";
import EntryCard from "./EntryCard";
import SearchSortBar from "./SearchSortBar";
import { ThemeContext } from "../../context/ThemeContext";
import HistoryStyles from "../../styles/HistoryStyles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const styles = HistoryStyles(theme);

  const [foodEntries, setFoodEntries] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date-newest");
  const [showSortOptions, setShowSortOptions] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadEntries();
    }, [])
  );

  const loadEntries = async () => {
    const data = await AsyncStorage.getItem("foodEntries");
    if (data) {
      setFoodEntries(JSON.parse(data));
    }
  };

  const handleDelete = async (id) => {
    const updatedEntries = foodEntries.filter((entry) => entry.id !== id);
    setFoodEntries(updatedEntries);
    await AsyncStorage.setItem("foodEntries", JSON.stringify(updatedEntries));
  };

  const getSortedEntries = () => {
    let sorted = [...foodEntries];

    if (search.trim()) {
      sorted = sorted.filter((entry) =>
        entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.restaurant.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case "date-newest":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "date-oldest":
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "price-asc":
        sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
        break;
      case "price-desc":
        sorted.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
        break;
      case "calories-asc":
        sorted.sort((a, b) => (a.calories ?? Infinity) - (b.calories ?? Infinity));
        break;
      case "calories-desc":
        sorted.sort((a, b) => (b.calories ?? -Infinity) - (a.calories ?? -Infinity));
        break;
      case "rating-asc":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }

    return sorted;
  };

  const groupEntriesByMonth = (entries) => {
    const grouped = {};
    entries.forEach((entry) => {
      try {
        const date = parseISO(entry.date);
        const key = format(date, "MMMM yyyy");
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(entry);
      } catch (error) {
        console.error("Invalid Date:", entry.date);
      }
    });

    return Object.entries(grouped).sort(([a], [b]) => {
      const dateA = new Date(a + " 01");
      const dateB = new Date(b + " 01");
      return dateB - dateA;
    });
  };

  const sortedEntries = getSortedEntries();
  const groupedEntries = groupEntriesByMonth(sortedEntries);

  return (
    <SafeAreaView style={styles.container}>
      <SearchSortBar
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showSortOptions={showSortOptions}
        setShowSortOptions={setShowSortOptions}
      />

      <FlatList
        data={groupedEntries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View key={item[0]}>
            <Text style={styles.sectionTitle}>{item[0]}</Text>
            {item[1].map((entry) => (
              <EntryCard
                key={entry.id}
                item={entry}
                onEdit={() => navigation.navigate("EditEntry", { entry })}
                onDelete={() => handleDelete(entry.id)}
                theme={theme}
              />
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
