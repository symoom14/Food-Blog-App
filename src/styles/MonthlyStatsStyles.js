import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    flexGrow: 1,
  },
  flexContainer: {
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    elevation: 3,
  },
  lottie: {
    width: 80,
    height: 80,
  },
  textContainer: {
    marginLeft: 20,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
  },
});

export default styles;
