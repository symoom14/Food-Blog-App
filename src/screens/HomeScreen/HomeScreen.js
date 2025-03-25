import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles/HomeStyles";
import { ThemeContext } from "../../context/ThemeContext";

import BannerCard from "./BannerCard";
import TopRestaurantsModal from "./TopRestaurantsModal";

// Images
const images = {
  restaurant: require("../../assets/images/restaurant.jpg"),
  food: require("../../assets/images/food.jpg"),
  explore: require("../../assets/images/new_food.jpg"),
};

export default function HomeScreen({ navigation }) {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [greeting, setGreeting] = useState("");

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getTopRestaurants();
    updateGreeting();
  }, []);

  const getTopRestaurants = async () => {
    try {
      const data = await AsyncStorage.getItem("foodEntries");
      if (!data) return;
      const entries = JSON.parse(data);
      const restaurantCount = {};

      entries.forEach((entry) => {
        restaurantCount[entry.restaurant] = (restaurantCount[entry.restaurant] || 0) + 1;
      });

      const sortedRestaurants = Object.entries(restaurantCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([restaurant]) => restaurant);

      setTopRestaurants(sortedRestaurants);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  const updateGreeting = () => {
    const hour = new Date().getHours();
    let text = "";

    if (hour >= 5 && hour <= 7) text = "Hello early bird! 🐦";
    else if (hour >= 7 && hour <= 12) text = "Big brekkie? 🥐";
    else if (hour >= 12 && hour <= 14) text = "Lunch time! 🍜";
    else if (hour >= 14 && hour <= 18) text = "Hello snacker! 🍕";
    else if (hour >= 18 && hour <= 23) text = "Dinner time? 🍝";
    else text = "Whoa night owl! 🌃";

    setGreeting(text);
  };

  const banners = [
    {
      id: "1",
      title: "Your Top Restaurants",
      subtitle: topRestaurants.join(", ") || "Check your top picks!",
      image: images.restaurant,
      action: () => setIsModalVisible(true),
    },
    {
      id: "2",
      title: "Food This Month",
      subtitle: "Your monthly food log",
      image: images.food,
      action: () => navigation.navigate("StatsSplash"),
    },
    {
      id: "3",
      title: "Try Something New!",
      subtitle: "Explore a new restaurant today!",
      image: images.explore,
      action: () => navigation.navigate("MappingSplash"),
    },
  ];

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background }]}>
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.greeting, { color: theme.textPrimary }]}>
          {greeting}
        </Text>

        {banners.map((banner) => (
          <BannerCard
            key={banner.id}
            title={banner.title}
            subtitle={banner.subtitle}
            image={banner.image}
            onPress={banner.action}
          />
        ))}

        <TopRestaurantsModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          topRestaurants={topRestaurants}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
