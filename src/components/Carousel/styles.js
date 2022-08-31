import { StyleSheet } from "react-native";

const DOT_SIZE = 6;
const DOT_SPACING = 0;

const styles = StyleSheet.create({
  dot: {
    borderRadius: DOT_SIZE,
    width: DOT_SIZE,
    height: DOT_SIZE,
    margin: DOT_SPACING,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  dotSelected: {
    borderRadius: DOT_SIZE,
    width: DOT_SIZE,
    height: DOT_SIZE,
    margin: DOT_SPACING,
    backgroundColor: "#000000",
    zIndex: 1000,
    position: "absolute",
  },
});

export default styles;
