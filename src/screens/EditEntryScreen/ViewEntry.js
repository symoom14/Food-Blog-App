import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/ViewEntryStyles";

export default function ViewEntry({ entry, onEditPress }) {
  const { name, restaurant, price, calories, date, image } = entry;
  const { theme } = useContext(ThemeContext);

  const openInMaps = () => {
    const encoded = encodeURIComponent(restaurant);
    const url = Platform.select({
      ios: `http://maps.apple.com/?q=${encoded}`,
      android: `geo:0,0?q=${encoded}`,
    });
    Linking.openURL(url);
  };

  return (
    <>
      {image && (
        <Image source={{ uri: image }} style={styles.imagePreview} />
      )}

      <View style={styles.viewRow}>
        <View style={styles.iconRow}>
          <Ionicons name="fast-food" size={25} color="orange" />
          <Text style={[styles.foodTitle, { color: theme.textPrimary }]}>
            {name}
          </Text>
        </View>
      </View>

      {restaurant ? (
        <View style={styles.viewRow}>
          <TouchableOpacity onPress={openInMaps}>
            <View style={styles.iconRow}>
              <Ionicons name="location" size={20} color={theme.linkColor} />
              <Text
                style={[
                  styles.restaurantName,
                  styles.linkText,
                  { color: theme.linkColor },
                ]}
              >
                {restaurant}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}

      {price ? (
        <View style={styles.viewRow}>
          <View style={styles.iconRow}>
            <Ionicons name="cash-outline" size={20} color={theme.success} />
            <Text style={[styles.viewText, { color: theme.textPrimary }]}>
              {" "}
              ${price}
            </Text>
          </View>
        </View>
      ) : null}

      {calories ? (
        <View style={styles.viewRow}>
          <View style={styles.iconRow}>
            <Ionicons name="flame" size={20} color="orange" />
            <Text style={[styles.viewText, { color: theme.textPrimary }]}>
              {" "}
              {calories} cal
            </Text>
          </View>
        </View>
      ) : null}

      {date ? (
        <View style={styles.viewRow}>
          <View style={styles.iconRow}>
            <Ionicons name="calendar" size={20} color="red" />
            <Text style={[styles.viewText, { color: theme.textPrimary }]}>
              {new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Text>
          </View>
        </View>
      ) : null}

      <TouchableOpacity
        onPress={onEditPress}
        style={[styles.editButton, { backgroundColor: theme.primary }]}
      >
        <Text style={[styles.editButtonText, { color: theme.textOnPrimary }]}>
          Edit
        </Text>
      </TouchableOpacity>

    </>
  );
}
