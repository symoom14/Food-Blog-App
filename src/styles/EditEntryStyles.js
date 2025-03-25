import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  imagePreview: { width: "100%", height: 300, borderRadius: 10, marginBottom: 20 },

  label: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#0290f5",
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
  },

  viewLabel: { fontSize: 14, fontWeight: "bold", marginTop: 10, color: "#888" },
  viewText: { fontSize: 18, color: "#333", marginLeft: 8, fontWeight: "semibold" },
  linkText: { color: "#007aff", textDecorationLine: "none" },

  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  editButtonText: { color: "white", fontWeight: "600", fontSize: 16 },

  saveButton: {
    backgroundColor: "#0bb825",
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: { color: "white", fontSize: 16, fontWeight: "600" },

  deleteButton: {
    backgroundColor: "#ffeaea",
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
  },
  deleteButtonText: { color: "red", fontSize: 16, fontWeight: "600" },

  errorText: { fontSize: 18, color: "red", marginBottom: 10 },
  iconRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  foodTitle: { fontSize: 25, marginLeft: 8, fontWeight: "bold" },
  restaurantName: { fontSize: 20, marginLeft: 12 },
  viewRow: { marginBottom: 10 },
});

export default styles;
