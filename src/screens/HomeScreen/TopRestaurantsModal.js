import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default function TopRestaurantsModal({ isVisible, onClose, topRestaurants }) {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Your Top Restaurants</Text>
        {topRestaurants.length > 0 ? (
          topRestaurants.map((restaurant, index) => (
            <Text key={index} style={styles.modalText}>
              {index + 1}. {restaurant}
            </Text>
          ))
        ) : (
          <Text style={styles.modalText}>No data available</Text>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
