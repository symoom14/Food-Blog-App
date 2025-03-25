import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatRow from "./StatRow";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/MonthlyStatsStyles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MonthlyStatsScreen() {
  const [stats, setStats] = useState({
    entries: 0,
    restaurants: 0,
    totalSpend: 0,
  });

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();

    try {
      const data = await AsyncStorage.getItem("foodEntries");
      if (!data) return;
      const entries = JSON.parse(data);

      const thisMonthEntries = entries.filter((entry) => {
        const entryDate = new Date(entry.date);
        return (
          entryDate.getMonth() === thisMonth &&
          entryDate.getFullYear() === thisYear
        );
      });

      const restaurantSet = new Set();
      let totalSpend = 0;

      thisMonthEntries.forEach((entry) => {
        if (entry.restaurant) restaurantSet.add(entry.restaurant);
        if (entry.price) totalSpend += parseFloat(entry.price);
      });

      setStats({
        entries: thisMonthEntries.length,
        restaurants: restaurantSet.size,
        totalSpend: totalSpend.toFixed(2),
      });
    } catch (error) {
      console.error("Error fetching monthly stats:", error);
    }
  };

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.header, { color: theme.textPrimary }]}>
          Stats This Month
        </Text>

        <StatRow
          label="Entries Logged"
          value={stats.entries}
          animation={require("../../assets/lottie/food_entry.json")}
        />
        <StatRow
          label="Restaurants Visited"
          value={stats.restaurants}
          animation={require("../../assets/lottie/restaurant_count.json")}
        />
        <StatRow
          label="Total Spending ($)"
          value={stats.totalSpend}
          animation={require("../../assets/lottie/spending.json")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
