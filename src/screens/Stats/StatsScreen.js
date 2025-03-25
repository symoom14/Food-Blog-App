// src/screens/Stats/StatsScreen.js
import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { parseISO, isSameMonth } from "date-fns";
import StatCard from "./StatCard";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/MonthlyStatsStyles"; // using same styles
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatsScreen() {
  const [entries, setEntries] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const load = async () => {
      const data = await AsyncStorage.getItem("foodEntries");
      if (data) setEntries(JSON.parse(data));
    };
    load();
  }, []);

  const thisMonthEntries = entries.filter((entry) => {
    if (!entry.date) return false;
    const date = parseISO(entry.date);
    return isSameMonth(date, new Date());
  });

  const totalSpent = thisMonthEntries.reduce((sum, e) => e.price ? sum + e.price : sum, 0);
  const restaurantSet = new Set(thisMonthEntries.map(e => e.restaurant).filter(Boolean));

  const stats = [
    {
      id: "1",
      title: "Food Recorded This Month",
      value: thisMonthEntries.length,
      animation: require("../../assets/lottie/Lottie_stat_food.json"),
    },
    {
      id: "2",
      title: "Restaurants Visited",
      value: restaurantSet.size,
      animation: require("../../assets/lottie/Lottie_stat_restaurant.json"),
    },
    {
      id: "3",
      title: "Total Spending",
      value: `$${totalSpent.toFixed(2)}`,
      animation: require("../../assets/lottie/Lottie_stat_price.json"),
    },
  ];

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background, paddingTop: 30, }]}>
      <Text style={[styles.header, { color: theme.textPrimary }]}>
        This Month's Stats
      </Text>

      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          animation={stat.animation}
        />
      ))}
    </SafeAreaView>
  );
}
