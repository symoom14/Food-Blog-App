import { StyleSheet } from "react-native";

const HistoryStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.historyscreenbackground,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 15,
      paddingLeft: 10,
      color: theme.textPrimary,
    },
    // These are used by EntryCard styles (passed via props)
    foodName: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.textPrimary,
      marginBottom: 2,
    },
    restaurantName: {
      fontSize: 16,
      color: theme.textSecondary,
      marginBottom: 5,
    },
    foodDetails: {
      fontSize: 14,
      color: theme.textMuted,
      fontWeight: "500",
    },
    ratingText: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 4,
    },
    card: {
      flexDirection: "row",
      backgroundColor: theme.cardBackground,
      borderRadius: 10,
      padding: 12,
      marginVertical: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      alignItems: "center",
    },
    cardRight: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    foodImage: {
      width: 100,
      height: 100,
      borderRadius: 5,
      marginRight: 15,
    },
    editButton: {
      backgroundColor: theme.buttonSecondary,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 50,
      marginTop: 8,
      alignSelf: "flex-start",
    },
    editButtonText: {
      color: theme.textOnPrimary,
      fontSize: 14,
      fontWeight: "bold",
    },
    actionButtons: {
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    deleteButton: {
      marginTop: 6,
      backgroundColor: theme.errorBackground,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 50,
      marginTop: 8,
      alignSelf: "flex-start",
    },
    entryMeta: {
      marginTop: 6,
    },
    iconRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 2,
    },
    metaText: {
      fontSize: 14,
      fontWeight: "500",
      color: theme.textMuted,
      marginLeft: 6,
    },
  });

export default HistoryStyles;
