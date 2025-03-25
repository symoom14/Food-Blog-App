import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const bannerHeight = 180;

export default function BannerCard({ title, subtitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.bannerContainer}>
        <Image source={image} style={styles.bannerImage} />
        <View style={styles.overlay} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>{title}</Text>
          <Text style={styles.bannerSubtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: screenWidth - 40,
    height: bannerHeight,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  bannerTextContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  bannerTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  bannerSubtitle: { fontSize: 14, color: "#ddd" },
});
