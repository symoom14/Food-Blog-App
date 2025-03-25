import { StyleSheet } from "react-native";

const AddEntryStyles = (theme) =>
  StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: theme.background, // 📱 Supports dark/light
    },
    container: {
      flex: 1,
    },
    formContainer: {
      padding: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      marginTop: -20,
      color: theme.textPrimary,
    },
    formCard: {
      backgroundColor: theme.modalBackground,
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
      color: theme.textPrimary,
    },
    input: (isFocused, theme) => ({
      borderWidth: 2,
      borderColor: isFocused ? "#007bff" : theme.inputBorder,
      backgroundColor: theme.inputBackground,
      color: theme.inputText,
      padding: 12,
      marginBottom: 15,
      borderRadius: 8,
      fontSize: 16,
    }),    
    imageButton: {
      backgroundColor: theme.buttonBackgroundImagePicker,
      paddingVertical: 14,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "70%",
      alignSelf: "center",
      marginBottom: 20,
    },
    imageButtonText: {
      color: theme.accent,
      fontSize: 16,
      fontWeight: "700",
      marginLeft: 8,
    },
    imagePreview: {
      width: "100%",
      height: 250,
      borderRadius: 10,
      marginBottom: 20,
    },
    datePicker: {
      padding: 12,
      backgroundColor: theme.inputBackground,
      borderRadius: 6,
      marginBottom: 15,
    },
    slider: {
      marginBottom: 15,
    },
    saveButton: {
      backgroundColor: theme.successBackground,
      padding: 14,
      borderRadius: 50,
      alignItems: "center",
    },
    saveButtonText: {
      color: theme.success,
      fontSize: 16,
      fontWeight: "600",
    },
  });

export default AddEntryStyles;
