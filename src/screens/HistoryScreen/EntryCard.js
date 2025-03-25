import React from "react";
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";

const ratingLabels = ["Poor", "Okay", "Fair", "Good", "Great", "Excellent"];

export default function EntryCard({ item, onEdit, onDelete, theme }) {
  const getRatingColor = (rating) => {
    const colors = ["#D32F2F", "#FF5722", "#FFA000", "#FBC02D", "#8BC34A", "#388E3C"];
    return { color: colors[rating] || theme.textPrimary };
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.entrycardBackground }]}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />

      <View style={styles.cardRight}>
        <View style={{ flexShrink: 1 }}>
          <Text style={[styles.foodName, { color: theme.textPrimary }]}>
            {item.name}
          </Text>
          <Text style={[styles.restaurantName, { color: theme.textSecondary }]}>
            {item.restaurant}
          </Text>

          <View style={styles.entryMeta}>
            {item.price != null && (
              <View style={styles.iconRow}>
                <Ionicons name="cash" size={16} color="green" />
                <Text style={[styles.metaText, { color: theme.textSecondary }]}>
                  ${item.price}
                </Text>
              </View>
            )}

            {item.date && (
              <View style={styles.iconRow}>
                <Ionicons name="calendar" size={16} color="red" />
                <Text style={[styles.metaText, { color: theme.textSecondary }]}>
                  {format(parseISO(item.date), "d MMM yyyy")}
                </Text>
              </View>
            )}

            {item.rating != null && (
              <View style={styles.iconRow}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={[styles.metaText, getRatingColor(item.rating)]}>
                  {ratingLabels[item.rating]}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={onEdit} style={[styles.editButton, { backgroundColor: theme.buttonSecondary }]}>
            <Ionicons name="arrow-forward-circle-outline" size={18} color="#1a50d2" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Alert.alert("Confirm Delete", "Are you sure you want to delete this entry?", [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", onPress: onDelete },
              ])
            }
            style={[styles.deleteButton, { backgroundColor: theme.errorBackground }]}
          >
            <Ionicons name="trash-outline" size={18} color="#d11a2a" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  cardRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  restaurantName: {
    fontSize: 16,
    marginBottom: 5,
  },
  entryMeta: { marginTop: 6 },
  iconRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  metaText: { fontSize: 14, fontWeight: "500", marginLeft: 6 },
  actionButtons: { justifyContent: "center", alignItems: "center", gap: 8 },
  editButton: {
    padding: 10,
    borderRadius: 50,
    marginTop: 8,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 50,
    marginTop: 8,
  },
});
