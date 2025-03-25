import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  datePicker: {
    padding: 12,
    backgroundColor: "#ddd",
    borderRadius: 6,
    marginBottom: 15,
  },
  slider: {
    marginBottom: 15,
  },
});

export default styles;
