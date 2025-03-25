import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const bannerHeight = 180;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 23,
    marginTop: 20,
    marginBottom: 25,
  },
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
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "#ddd",
  },
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

export default styles;
