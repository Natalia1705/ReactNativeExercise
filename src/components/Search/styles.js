import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchButton: {
    height: 40,
    width: "90%",
    borderColor: "#E5E5E5",
    borderStyle:'solid',
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    position: "absolute",
    top: 50,
    zIndex: 100,
  },

  searchButtonText: {
    color: "#666666",
    fontSize: 14,
    lineHeight: 23,
  },
});

export default styles;
