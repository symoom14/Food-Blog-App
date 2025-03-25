// src/styles/SettingsStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: "space-between" 
  },
  topSection: { 
    alignItems: "flex-start", 
  },
  heading: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: { 
    fontSize: 16, 
    marginBottom: 5 
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  switchLabel: { fontSize: 18 },
  bottomSection: { 
    alignItems: "center", 
    marginBottom: 30 
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 50, 
    width: "100%",
    alignItems: "center",
  },
  deleteButtonText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioLabel: {
    fontSize: 16,
  },
  bottomSection: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ffeaea",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  deleteButtonText: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },
  
});
