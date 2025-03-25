import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  viewRow: {
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  foodTitle: {
    fontSize: 25,
    marginLeft: 8,
    fontWeight: "bold",
  },
  restaurantName: {
    fontSize: 20,
    marginLeft: 12,
  },
  viewText: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "500",
  },
  linkText: {
    textDecorationLine: "none",
  },
  editButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  editButtonText: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default styles;
